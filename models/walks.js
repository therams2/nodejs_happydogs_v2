module.exports = (sequelize, DataType) => {
    return sequelize.define('walks', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id         :    DataType.INTEGER,
        staff_id        :    DataType.INTEGER,
        tariff_id       :    DataType.INTEGER,
        duration        :    DataType.STRING,
        polylines_id    :    DataType.INTEGER,    
    });
}