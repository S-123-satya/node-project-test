const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('node-project-test', 'root', 'Satya0*123', {
    host: 'localhost',
    dialect: 'mysql'
  });
module.exports=sequelize;