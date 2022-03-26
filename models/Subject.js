const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Subject extends Model {} 

Subject.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNulll: false
        },
        example: {
            type: DataTypes.STRING,
            allowNull: false
        },
        topic_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'topic',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        modelName: 'subject'
    }
);

module.exports = Subject;