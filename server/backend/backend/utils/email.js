const jwt = require('jsonwebtoken');

const getEmailFromToken = (token) => {
    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decodedToken);
        return decodedToken.email;
    } catch (error) {
        return null;
    }
};

module.exports = {
    getEmailFromToken
};
