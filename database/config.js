const Sequelize = require('sequelize');
//  Traemos los modelos
const UserModel = require('../models/user');
const PetModel = require('../models/pet');
const MarkerModel = require('../models/marker');
const AddressModel = require('../models/address');
const WalksModel = require('../models/walks');
const TariffModel = require('../models/tariff/tariff');
const TariffPriceModel = require('../models/tariff/tariff_has_price');
const TariffPriceHasTModel = require('../models/tariff/price_tariff');

const sequelize = new Sequelize('db_happydogs', 'root', '12345', {
    host: 'localhost',
    dialect: 'mysql'
});

const Pet = PetModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);
const Marker = MarkerModel(sequelize, Sequelize);
const Address = AddressModel(sequelize, Sequelize);
const Walks = WalksModel(sequelize,Sequelize);
const Tariff = TariffModel(sequelize, Sequelize);
const TariffPrice = TariffPriceModel(sequelize, Sequelize);
const TariffPriceHasT = TariffPriceHasTModel(sequelize, Sequelize);
//  Sincronizamos con la base de datos
sequelize.sync({ force: false })
    .then(() => {
        console.log("tablas sincronizadas");
    })

//  Exportamos el modelo de sequelize
module.exports = {
    User,
    Pet,
    Marker,
    Address,
    Walks,
    Tariff,
    TariffPrice,
    TariffPriceHasT,
}