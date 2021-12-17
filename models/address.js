//creamos modelo
module.exports = (sequelize, DataType) => {
    return sequelize.define('address', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        city              : DataType.STRING,
        province          : DataType.STRING,
        address_line1     : DataType.STRING,
        street_number     : DataType.STRING(5),
        apartment_number  : DataType.STRING(5),
        post_code         : DataType.STRING(5),
    });
}