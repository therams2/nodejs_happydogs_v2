const { response } = require('express');
const { User } = require('../database/config');

const getUserData = async(req, res = response) => {
    const { id } = req.body;
    console.log(id);
    console.log("data");
    try {
        const existId = await User.findOne({ where: { id: id } });
        if (!existId) {
            console.log("no existe");
            return res.status(404).json({
                ok: false,
                msg: 'ID no existe',
            });
        }else{
            console.log("existe");
            return res.status(200).json({
            ok: true,
            user: existId,
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
   getUserData
}