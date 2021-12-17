/* path: /api/login */
const { Router } = require('express');
const { check } = require('express-validator');
const { getUserData } = require('../controllers/profile');
const { validarCampos } = require('../middlewares/validar-campos');
const router = Router();

router.post('/data', [
    check('id', 'El id es obligatorio').not().notEmpty(), //check es un middleware que verifica campo por campo y añadir
    validarCampos //exportamos de validar-campos
], getUserData);

module.exports = router;