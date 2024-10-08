// service .js
const jwt = require('jsonwebtoken');
const secretKey = 'tarun77@@7';

function setUser(user) {
    const payload = {
        _id: user._id,
        email: user.email
    };
    return jwt.sign(payload, secretKey);
}

function getUser(token) {
    if (!token) return null;
    try {
        return jwt.verify(token, secretKey);
    } catch (err) {
        console.error('JWT verification failed:', err.message);
        return null;  
    }
}

module.exports = {
    setUser,
    getUser
};
