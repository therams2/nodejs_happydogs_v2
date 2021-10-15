//creamos modelo
module.exports = (sequelize, DataType) => {
    return sequelize.define('user', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        picture_path    : DataType.STRING,
        email           : DataType.STRING,
        password        : DataType.STRING,
        name            : DataType.STRING,
        date_of_birth   : DataType.DATEONLY,
        phone           : DataType.STRING(10),
    });
}