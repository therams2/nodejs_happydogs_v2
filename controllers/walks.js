const { response } = require('express');
const { Walks } = require('../database/config');

const getWalksData = async(req, res = response) => {
    const { id } = req.body;
    console.log(id);
    console.log("data");
    try {
        const walks = await Walks.findAll({ where: { user_id: id } });
        if (!walks) {
            console.log("no existe");
            return res.status(404).json({
                ok: false,
                msg: 'ID no existe',
            });
        }else{
            console.log("existe");
            return res.status(200).json({
            ok: true,
            walks: walks,
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
    getWalksData
}