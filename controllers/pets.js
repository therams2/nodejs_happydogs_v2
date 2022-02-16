const { response } = require('express');
const { Pet } = require('../database/config');

const crearPet = async(req, res = response) => {
    const { name } = req.body;
    try {
        const existName = await Pet.findOne(
            { where: 
                { name: name } 
            });
            
        if (existName) {
            return res.status(400).json({ 
                ok: false,
                msg: "El nombre de esta mascota no esta disponible"
            });
        }

        const petData = req.body;

        // Creamos new pet
        const pet = await Pet.create(petData);

        // Enviamos respuesta
        res.status(200).json({
            ok: true,
            pet: pet,
            msg: "Registro Correcto"
        });

    } catch (error) {
        console.log(error);
    }
}


const getPetData = async(req, res = response) => {
    const { id } = req.body;
    console.log(id);
    console.log("data");
    try {
        const existId = await Pet.findAll({ where: { user_id: id } });
        if (!existId) {
            console.log("no existe");
            return res.status(404).json({
                ok: false,
                msg: 'ID no existe',
            });
        }else{
            console.log(existId);
            return res.status(200).json({
            ok: true,
            pet: existId,
            msg: 'ID existe',
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
    crearPet,
    getPetData
}