//  Tabla de los precios de las tarifas dependiendo de la cantidad de las mascotas
module.exports = (sequelize, DataType) => {
    return sequelize.define('price_tariffs', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cant_animals    :    DataType.STRING,
        price           :    DataType.STRING,
        
    });
}