//creamos modelo
module.exports = (sequelize, DataType) => {
    return sequelize.define('tariffs', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name            :    DataType.STRING,
        alias           :    DataType.STRING,
        description     :    DataType.STRING,
    });
}



