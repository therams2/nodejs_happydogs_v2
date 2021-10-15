//creamos modelo
module.exports = (sequelize, DataType) => {
    return sequelize.define('markers', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id:{ 
            type: DataType.INTEGER,

        },
        title: DataType.STRING,
        latitud: DataType.STRING,
        longitud: DataType.STRING        
    });
}