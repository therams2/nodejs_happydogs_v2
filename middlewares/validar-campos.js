const { validationResult } = require("express-validator");
const validarCampos = (req, res, next) => { //next es un callback qe le indica a express que si todo sale bien continue con el sig. middleware (check)

    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errores.mapped()
        });
    }
    next();
}

module.exports = {
    validarCampos
}