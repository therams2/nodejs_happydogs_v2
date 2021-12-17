const jwt = require('jsonwebtoken');

const validarJWT = (req, res, next) => {
    // Leer token
    const token = req.header('x-token'); //header
    if (!token) {
        return res.status(401).json({
            ok: false,
            userId : "0",
            token: "0"
        });
    }
    try {
        const { uid } = jwt.verify(token, process.env.JWT_KEY);
        req.uid = uid;
        next();
    } catch (error) {
        return res.status(402).json({
            ok     : false,
            userId : "0",
            token  : "0"
        })
    }
}

module.exports = {
    validarJWT
}