const { DataTypes } = require("sequelize");
const sequelize = require('../config/db');


const ProductModel = sequelize.define('product', {
    pdid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    pdname: {
        type: DataTypes.STRING,
    },
    pddes: {
        type: DataTypes.TEXT
    },
    pdprice: {
        type: DataTypes.FLOAT
    },
    pdstock: {
        type: DataTypes.FLOAT
    },
    pdoffer: {
        type: DataTypes.FLOAT
    },
    pdImg1: {
        type: DataTypes.STRING
    },
    pdImg2: {
        type: DataTypes.STRING
    },
    pdImg3: {
        type: DataTypes.STRING
    },
    pdImg4: {
        type: DataTypes.STRING
    },
});

module.exports = ProductModel;