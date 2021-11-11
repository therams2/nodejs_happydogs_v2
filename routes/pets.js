/* path: /api/login */
const { Router } = require('express');
const { check } = require('express-validator');
const { crearPet, getPetData } = require('../controllers/pets');
const { validarCampos } = require('../middlewares/validar-campos');
const router = Router();

router.post('/register', [
    check('name', 'El nombre es obligatorio').not().notEmpty(), //check es un middleware que verifica campo por campo y añadir
    check('age', 'La edad es obligatoria').not().notEmpty(),
    check('race', 'La raza es obligatoria').not().notEmpty(),
    validarCampos //exportamos de validar-campos
], crearPet);


router.post('/mypets', [
    check('id', 'El id es obligatorio').not().notEmpty(), //check es un middleware que verifica campo por campo y añadir
    validarCampos //exportamos de validar-campos
],getPetData );

module.exports = router;