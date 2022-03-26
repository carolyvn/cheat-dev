const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Topic extends Model {} 

Topic.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'topic'
    }
);

module.exports = Topic;