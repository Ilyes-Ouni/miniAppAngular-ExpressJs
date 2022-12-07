const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticateToken = (req, res, next) => {
    // console.log("authenticateToken :");

    const authHeader = req.headers['authorization']
        // console.log("authHeader :", authHeader);
    const token = authHeader && authHeader.split(' ')[1]
        // console.log("token :", token);
    if (!token) return res.sendStatus(401)
        // console.log("token exists");
    secret = "jababababaja"
    jwt.verify(token, secret, (err, results) => {
        payload = jwt.decode(token)

        return next()
    });

}

module.exports = authenticateToken;