const { DataTypes } = require("sequelize");
const sequelize = require("../util/database");


const Product=sequelize.define('product',
{
    id:{
        type:DataTypes.BIGINT,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    price:{
        type:DataTypes.BIGINT,
        allowNull:false,

    },
    item:{
        type:DataTypes.STRING,
        allowNull:false
    },
    category:{
        type:DataTypes.STRING,
        allowNull:false
    }
});
module.exports=Product;