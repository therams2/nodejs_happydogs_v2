const { Router }    =   require('express');
const { check }     =   require('express-validator');
const { crearUsuario, signin, renewToken } = require('../controllers/auth');
const { validarJWT }    =   require('../helpers/validar-jwt');
const { validarCampos } =   require('../middlewares/validar-campos');

const router = Router();

// SIGNUP
router.post('/signup', crearUsuario);

// SIGNIN
router.post('/signin', 
    [   check('password', 'El password obligatorio').not().notEmpty(),
        check('email', 'El email obligatorio').not().notEmpty().isEmail(),
        validarCampos ], signin);

// RENOVAR JTW
router.get('/renew', validarJWT, renewToken);

module.exports = router;