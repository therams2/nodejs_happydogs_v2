//creamos modelo
module.exports = (sequelize, DataType) => {
    return sequelize.define('user', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email           : DataType.STRING,
        password        : DataType.STRING,
        name            : DataType.STRING,
        phone           : DataType.STRING(10),
        isClient        : DataType.INTEGER
    });
}