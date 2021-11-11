//creamos modelo
module.exports = (sequelize, DataType) => {
    return sequelize.define('pets', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id         :    DataType.INTEGER,
        picture_path    :    DataType.STRING,
        name            :    DataType.STRING,
        age             :    DataType.STRING,
        race            :    DataType.STRING,
        gender          :    DataType.STRING,
    });
}