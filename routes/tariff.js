/* path: /api/login */
const { Router } = require('express');
const { check } = require('express-validator');
const { getTariffData } = require('../controllers/tariff');
const { validarCampos } = require('../middlewares/validar-campos');
const router = Router();

router.get('/data', getTariffData);

module.exports = router;