//    path: /api/login
const { Router } = require('express');
const { check } = require('express-validator');
const { getWalksData } = require('../controllers/walks');
const { validarJWT } = require('../helpers/validar-jwt');
const { validarCampos } = require('../middlewares/validar-campos');
const router = Router();


// SIGNIN
router.get('/agent/getWalks', [
    check('id', 'El id obligatorio').not().notEmpty(),
    validarCampos
], getWalksData);

module.exports = router;