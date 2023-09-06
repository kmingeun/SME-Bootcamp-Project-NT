const bcrypt = require('bcrypt');
const db = require('../config/database');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const authService = require('../services/authService');

// 회원가입
exports.register = (req, res) => {
    const { Name, Email, Password, Phone, Techs, OnOff, CooperationType } = req.body;
    let onOffValue = null;

    switch (OnOff) {
        case 'on':
            onOffValue = 'ON';
            break;
        case 'off':
            onOffValue = 'OFF';
            break;
        case 'both':
            onOffValue = 'null';
    }

    bcrypt.hash(Password, 10, (err, hashedPassword) => {
        if (err) {
            console.error('Error hashing password:', err);
            res.status(500).json({ message: 'Failed to register' });
            return;
        }

        db.query('INSERT INTO Users (Name, Email, Password, CooperationType, Phone, Techs, OnOff) VALUES (?, ?, ?, ?, ?, ?, ?);',
            [Name, Email, hashedPassword, CooperationType, Phone, Techs, onOffValue], (err, result) => {
                if (err) {
                    console.error('Error adding user:', err);
                    res.status(500).json({ message: 'Failed to register' });
                    return;
                }
                res.status(200).json({ message: 'User registered successfully' });

            });
    });
};

exports.login = (req, res) => {
    const { LoginEmail, LoginPassword } = req.body;

    // Users 테이블에서 해당 이메일을 가진 유저 정보 가져오기
    db.query('SELECT Name, Email, Password FROM Users WHERE Email = ?;', [LoginEmail], (err, userData) => {
        if (err) {
            console.error('Error fetching user data:', err);
            res.status(500).json({ message: 'Failed to login' });
            return;
        }

        if (userData.length === 0) {
            res.status(401).json({ message: 'User not found' });
            return;
        }

        const user = userData[0];
        const hashedPassword = user.Password;

        // 입력된 비밀번호와 해싱된 비밀번호 비교
        bcrypt.compare(LoginPassword, hashedPassword, (err, result) => {
            if (err) {
                console.error('Error comparing passwords:', err);
                res.status(500).json({ message: 'Failed to login' });
                return;
            }

            // ...
            if (result) {
                // 이전 리프레시 토큰이 존재하는 경우, 데이터베이스에서 삭제 또는 무효화 처리
                db.query('DELETE FROM Refresh WHERE user_email = ?;', [user.Email], (err, deleteResult) => {
                    if (err) {
                        console.error('Error deleting previous refresh token:', err);
                        res.status(500).json({ message: 'Failed to login' });
                        return;
                    }

                    // 유저 인증 완료, JWT 생성
                    const accessToken = jwt.sign(
                        {
                            email: user.Email,
                            name: user.Name,
                        },
                        process.env.JWT_SECRET,
                        {
                            expiresIn: '10m',
                            issuer: 'Project-NT'
                        }
                    );
                    const refreshToken = jwt.sign(
                        {
                            email: user.Email,
                            name: user.Name,
                        },
                        process.env.JWT_SECRET,
                        {
                            expiresIn: '24h',
                            issuer: 'Project-NT'
                        }
                    );

                    // 새로운 리프레시 토큰 데이터베이스에 저장
                    db.query('INSERT INTO Refresh (user_email, token) VALUES (?, ?);', [user.Email, refreshToken], (err, insertResult) => {
                        if (err) {
                            console.error('Error inserting new refresh token:', err);
                            res.status(500).json({ message: 'Failed to login' });
                            return;
                        }

                        // 쿠키에 JWT 토큰 설정
                        res.cookie('accessToken', accessToken, { httpOnly: true, secure: false });
                        res.cookie('refreshToken', refreshToken, { httpOnly: true, secure: false });
                        // 클라이언트에 토큰 전송
                        res.json({ accessToken: accessToken, refreshToken: refreshToken });
                    });
                });
            }
            else {
                res.status(401).json({ message: 'Invalid credentials' });
            }
        });
    });
};

exports.logout = (req, res) => {
    res.clearCookie('accessToken');
    res.clearCookie('refreshToken');
    res.status(200).json({ message: 'Logout successful' });
};

exports.checkLogin = (req, res) => {
    const token = req.cookies.jwt; // 쿠키에서 토큰을 가져옵니다.

    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
            if (err) {
                res.json({ loggedIn: false });
            } else {
                res.json({ loggedIn: true, user: decodedToken }); // 토큰이 유효한 경우 로그인 상태와 사용자 정보를 반환합니다.
            }
        });
    } else {
        res.json({ loggedIn: false });
    }
};

exports.verifyAccessToken = (req, res, next) => {
    const accessToken = req.cookies.jwt; // 쿠키에서 액세스 토큰을 가져옵니다.

    // 액세스 토큰 검증
    jwt.verify(accessToken, process.env.JWT_SECRET, (accessTokenErr, decodedToken) => {
        if (accessTokenErr) {
            // 액세스 토큰 만료 시 리프레시 토큰 검증 시도
            const refreshToken = req.cookies.refreshToken;
            jwt.verify(refreshToken, process.env.JWT_SECRET, (refreshTokenErr, decodedRefreshToken) => {
                if (refreshTokenErr) {
                    // 리프레시 토큰까지 만료된 경우: 로그인 페이지로 리디렉션
                    return res.redirect('/login');
                } else {
                    // 새로운 액세스 토큰 발급 및 쿠키 설정
                    const newAccessToken = jwt.sign(
                        {
                            email: decodedRefreshToken.email,
                            name: decodedRefreshToken.name
                        },
                        process.env.JWT_SECRET,
                        {
                            expiresIn: '10m',
                            issuer: 'Project-NT'
                        }
                    );
                    res.cookie('accessToken', newAccessToken, { httpOnly: true, secure: false });
                    next();
                }
            });
        } else {
            // 액세스 토큰 유효한 경우
            next();
        }
    });
};

// 아이디 찾기
exports.searchId = (req, res) => {
    const { name, phone } = req.body;
    console.log(req);
    const query = 'SELECT Email FROM Users WHERE Name = ? AND Phone = ?';
    db.query(query, [name, phone], (err, results) => {
        console.log(results);
        if (err) {
            console.error('Error executing query:', err);
            res.json({ error: 'An error occurred while fetching data' });
            return;
        }
        if (results.length === 0) {
            res.json({ email: null });
        } else {
            const email = results[0].Email;
            res.json({ email });
        }
    });
};

exports.searchPassword = (req, res) => {
    const { email, phone } = req.body;
    const query = 'SELECT Email FROM Users WHERE Email = ? AND Phone = ?';
    db.query(query, [email, phone], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.json({ error: 'An error occurred while fetching data' });
            return;
        }
        if (results.length === 0) {
            res.json({ email: null });
        } else if (results.length === 1) {
            const user = results[0];
            const token = jwt.sign({ email: user.Email }, process.env.SECRET_KEY, { algorithm: "HS256", expiresIn: '5m' });
            // Auth 테이블에 토큰 정보 저장
            const expiration = new Date(Date.now() + 5 * 60 * 1000); // 5분 후
            const authQuery = 'INSERT INTO Auth (token, expiration) VALUES (?, ?)';
            db.query(authQuery, [token, expiration], (authErr, authResult) => {
                if (authErr) {
                    console.error('Error saving token to Auth table:', authErr);
                    res.status(500).json({ message: 'Failed to initiate password reset' });
                    return;
                }

                // 이메일 전송 및 응답 처리
                const resetLink = `http://localhost:8080/passwordChange/${token}`;
                const emailSubject = 'Password Reset';
                const emailHtml = `Click the following link to reset your password: <a href="${resetLink}">${resetLink}</a>`;
                authService.sendEmail(user.Email, emailSubject, emailHtml);
                res.json({ email: user.Email });
            });
        } else {
            res.json({ email: null });
        }
    });
};

// 서버에서 토큰 검증
exports.verifyToken = (req, res, next) => {
    try {
        const { token } = req.params;

        // 토큰 검증 로직
        const tokenQuery = 'SELECT token, expiration FROM Auth WHERE token = ?';
        db.query(tokenQuery, [token], (err, [tokenResults]) => {
            if (err) {
                console.error('Error verifying token:', err);
                return res.status(500).json({ message: '토큰 검증 중 에러가 발생했습니다.' });
            }

            if (!tokenResults) {
                return res.status(400).json({ valid: false }); // 토큰이 유효하지 않음을 클라이언트에게 알립니다.
            }

            const tokenData = tokenResults;
            const now = new Date();
            if (now > tokenData.expiration) {
                // 토큰이 만료됨을 클라이언트에게 알립니다.
                return res.status(400).json({ valid: false, expired: true });
            }

            // 토큰 디코딩하여 이메일 정보 추출
            const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
            const userEmail = decodedToken.email;

            // 유효한 토큰이므로 이메일 정보와 함께 클라이언트에게 알립니다.
            res.status(200).json({ valid: true, email: userEmail });
        });
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            // 토큰이 만료된 경우 클라이언트에게 알립니다.
            return res.status(400).json({ valid: false, expired: true });
        } else {
            console.error('Error verifying token:', error);
            return res.status(500).json({ message: '토큰 검증 중 에러가 발생했습니다.' });
        }
    }
};



exports.updatePassword = (req, res) => {
    try {
        const { token, password } = req.body;
        console.log(token, password);
        // 토큰 디코딩하여 이메일 정보 추출
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
        const userEmail = decodedToken.email;

        // 비밀번호 해싱
        bcrypt.hash(password, 10, (hashErr, hashedPassword) => {
            if (hashErr) {
                console.error('Error hashing password:', hashErr);
                return res.status(500).json({ message: '비밀번호 업데이트 중 에러가 발생했습니다.' });
            }

            // 비밀번호 업데이트 쿼리 및 실행
            const updateQuery = 'UPDATE Users SET Password = ? WHERE Email = ?';
            db.query(updateQuery, [hashedPassword, userEmail], (updateErr, updateResult) => {
                if (updateErr) {
                    console.error('Error updating password:', updateErr);
                    return res.status(500).json({ message: '비밀번호 업데이트 중 에러가 발생했습니다.' });
                }

                if (updateResult.affectedRows === 0) {
                    return res.status(400).json({ message: '비밀번호 업데이트 실패' });
                }

                // 비밀번호 업데이트 성공 시 Auth 테이블에서 해당 토큰 삭제
                const deleteAuthQuery = 'DELETE FROM Auth WHERE token = ?';
                db.query(deleteAuthQuery, [token], (deleteErr) => {
                    if (deleteErr) {
                        console.error('Error deleting token:', deleteErr);
                        return res.status(500).json({ message: '비밀번호 업데이트 중 에러가 발생했습니다.' });
                    }

                    // 비밀번호 업데이트와 토큰 삭제가 모두 완료되면 성공 응답을 보냅니다.
                    res.status(200).json({ message: '비밀번호가 성공적으로 변경되었습니다.' });
                });
            });
        });
    } catch (error) {
        console.error('Error updating password:', error);
        return res.status(500).json({ message: '비밀번호 업데이트 중 에러가 발생했습니다.' });
    }
};
