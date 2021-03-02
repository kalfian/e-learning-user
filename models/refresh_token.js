const { sequelize } = require(".");

module.exports = (sequelize, datatype) => {
    const RefreshToken = sequelize.define('RefreshToken', {
        id: {
            type: datatype.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        token: {
            type: datatype.TEXT,
            allowNull: false
        },
        user_id: {
            type: datatype.INTEGER,
            allowNull: false
        },
        createdAt: {
            type: datatype.DATE,
            field: 'created_at',
            allowNull: false
        },
        updatedAt: {
            type: datatype.DATE,
            field: 'updated_at',
            allowNull: true
        }
    }, {
        tableName: "refresh_token",
        timestamp: true
    })

    return RefreshToken
}