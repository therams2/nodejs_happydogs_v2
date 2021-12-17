const { response } = require('express');
const { Tariff } = require('../database/config');

const getTariffData = async(req, res = response) => {
    const { id } = req.body;
    console.log(id);
    console.log("data");
    try {
        const tariffs = await Tariff.findAll();
        if (!tariffs) {
            console.log("no existe");
            return res.status(404).json({
                ok: false,
                msg: 'ID no existe',
            });
        }else{
            console.log("existe");
            return res.status(200).json({
            ok: true,
            tariffs: tariffs,
            msg: 'Tarifas existentes',
        })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}

module.exports = {
    getTariffData
}