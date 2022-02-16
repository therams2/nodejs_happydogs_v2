const { response } = require('express');
const { User } = require('../database/config');
const { generarJWT } = require('../helpers/jwt');

const bcrypt = require('bcryptjs');

const crearUsuario = async(req, res = response) => {
    console.log(req.body.user);
    //validamos el email que no exista
    const { password } = req.body.user;
    try {
        const userdata = req.body.user;

        // Encriptar contraseña
        const salt = bcrypt.genSaltSync();
        userdata.password = bcrypt.hashSync(password, salt);

        // Creamos new user
        const user = await User.create(userdata);

        // Generar mi JWT
        const token = await generarJWT(user.id);

        // Enviamos respuesta
        res.status(200).json({
            ok: true,
            user: user,
            msg: "Registro Correcto",
            token
        });

    } catch (error) {
        console.log(error);
        res.status(500);
        // Enviar error con codigo 500
    }
}



const getUser = async(req, res = response) => {
    const { id } = req.body;
    try {
        const existUser = await User.findOne({ where: { id } });
        if (!existUser) {
            return res.status(404).json({
                ok: false,
                msg: 'Usuario no encontrado'
            });
        }

        res.json({
            ok: true,
            user: existUser
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}


const signin = async(req, res = response) => {
    const { email, password } = req.body;
    try {
        const existUser = await User.findOne({ where: { email: email } });
        if (!existUser) {
            return res.status(404).json({
                ok: false,
                msg: 'Email no encontrado'
            });
        }

        // Validar el password
        const validPassword = bcrypt.compareSync(password, existUser.password);

        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'La contraseña no es valida'
            });
        }

        // Generar el JWT
        const token = await generarJWT(existUser.id);

        res.json({
            ok: true,
            user: {'id' : existUser.id},
            token
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}
//
const renewToken = async(req, res = response) => {
const id = req.uid;


// generar un nuevo JWT, generarJWT... uid...
const token = await generarJWT(id);

// Obtener el usuario por el ID, Usuario.findByPk... 
const usuario = await User.findByPk(id);
res.json({
    ok: true,
    userId: usuario.id,
    token
});

}


module.exports = {
    crearUsuario,
    signin,
    renewToken,
    getUser
}