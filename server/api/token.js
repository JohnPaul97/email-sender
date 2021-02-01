const jwt = require('jsonwebtoken');
const tokenSecret = require('../configs').tokenSecret;

const generateToken = (userId) => {
    return jwt.sign({ id: userId }, tokenSecret, {
        expiresIn: 100 // 100s
    })
}

const checkToken = (req, res, next) => {
    if (req.path === '/login') return next();
    
    jwt.verify(req.headers.authorization.substring(7), tokenSecret, (err, verifiedJwt) => {
        if (err) {
            return res.status(401).json({message: "invalid token, please login again!"});
            // return next();
            // next("invalid token, please login again!");
        }
        return next();
    })
}

module.exports = {
    generateToken: generateToken,
    checkToken: checkToken
};