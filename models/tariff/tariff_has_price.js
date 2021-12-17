//  Tabla para relacionar tarifas con la tabla price_tariff
module.exports = (sequelize, DataType) => {
    return sequelize.define('tariffs_has_price', {
        tariff_id           :    DataType.INTEGER,
        price_tariff_id     :    DataType.INTEGER,
    });
}