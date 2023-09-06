const express = require('express');
const app = express();
const session = require('express-session');
const cors = require('cors'); // cors 패키지 불러오기
const path = require('path');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes');
const projectRoutes = require('./routes/projectRoutes');
const recruitmentRoutes = require('./routes/recruitmentRoutes');
const memberRoutes = require('./routes/memberRoutes');
const userRoutes = require('./routes/userRoutes');
const db = require('./config/database');
const cron = require('node-cron');
const jwt = require('jsonwebtoken');

// 매일 자정에 실행되도록 스케줄을 설정합니다.
cron.schedule('0 0 * * *', async () => {
    try {
        const now = new Date();
        const deleteQuery = 'DELETE FROM Auth WHERE expiration <= ?';
        const result = await db.query(deleteQuery, [now]);

        console.log(`${result.affectedRows} expired tokens deleted.`);
    } catch (error) {
        console.error('Error deleting expired tokens:', error);
    }
});


// CORS 설정 적용
const corsOptions = {
    origin: 'http://localhost:8080', // 클라이언트의 도메인 주소
    credentials: true, // 쿠키를 주고받을 때 credentials 옵션을 활성화합니다.
    };

app.use(cors(corsOptions));

// 미들웨어 설정
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(session({
    secret: process.env.SECRET_KEY, // 세션 데이터를 암호화하기 위한 시크릿 키
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: false
    }
}));
app.use((req, res, next) => {
    res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.header('Pragma', 'no-cache');
    res.header('Expires', 0);
    next();
});
app.use('/auth', authRoutes);
app.use('/project', projectRoutes);
app.use('/recruit', recruitmentRoutes);
app.use('/member', memberRoutes);
app.use('/user',userRoutes);
app.use(express.static(path.join(__dirname, '../frontend/dist')));


// 서버 실행
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
