// structure of department 

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../connection");
// module of and the what the database requires adding a pirmary key and the types
class Department extends Model {}

Department.init(
    {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Department",
    }
);

module.exports = Department;