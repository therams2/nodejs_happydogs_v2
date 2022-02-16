const Sequelize = require('sequelize');

//  Traemos los modelos
const UserModel = require('../models/user');
const PetModel = require('../models/pet');
const AddressModel = require('../models/address');

const sequelize = new Sequelize('db_happydogs', 'root', '12345', {
    host: 'localhost',
    dialect: 'mysql'
});

const Pet = PetModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);
const Address = AddressModel(sequelize, Sequelize);

//  Sincronizamos con la base de datos
sequelize.sync({ force: false })
    .then(() => {
        console.log("tablas sincronizadas");
    })

//  Exportamos el modelo de sequelize
module.exports = {
    User,
    Pet,
    Address
}