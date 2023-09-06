const jwt = require("jsonwebtoken");
const process = require("process");

exports.verifyAccessToken = (req, res, next) => {
  const accessToken = req.cookies.jwt; // 쿠키에서 액세스 토큰을 가져옵니다.

  // 액세스 토큰 검증
  jwt.verify(
    accessToken,
    process.env.JWT_SECRET,
    (accessTokenErr, decodedToken) => {
      if (accessTokenErr) {
        // 액세스 토큰 만료 시 리프레시 토큰 검증 시도
        const refreshToken = req.cookies.refreshToken;
        jwt.verify(
          refreshToken,
          process.env.JWT_SECRET,
          (refreshTokenErr, decodedRefreshToken) => {
            if (refreshTokenErr) {
              // 리프레시 토큰까지 만료된 경우: 로그인 페이지로 리디렉션
              return res.redirect("/LoginPage");
            } else {
              // 새로운 액세스 토큰 발급 및 쿠키 설정
              const newAccessToken = jwt.sign(
                {
                  email: decodedRefreshToken.email,
                  name: decodedRefreshToken.name,
                },
                process.env.JWT_SECRET,
                {
                  expiresIn: "10m",
                  issuer: "Project-NT",
                }
              );
              res.cookie("accessToken", newAccessToken, {
                httpOnly: true,
                secure: false,
              });
              next();
            }
          }
        );
      } else {
        // 액세스 토큰 유효한 경우
        next();
      }
    }
  );
};
