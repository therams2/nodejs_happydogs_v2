//    path: /api/login
const { Router } = require('express');
const { check } = require('express-validator');
const { getUser } = require('../controllers/auth');
const { validarJWT } = require('../helpers/validar-jwt');
const { validarCampos } = require('../middlewares/validar-campos');
const router = Router();


// SIGNIN
router.get('/getUser', [
    check('id', 'El id obligatorio').not().notEmpty(),
    validarCampos
], getUser);

module.exports = router;