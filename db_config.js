const { Sequelize, DataTypes } = require("sequelize");
require('dotenv').config();

const USER = process.env.USER_NAME;
const PASSWORD = process.env.PASSWORD;
const DB = process.env.DB;
const HOST = process.env.HOST


const sequelize = new Sequelize(
    DB,
    USER,
    PASSWORD,
     {
       host: HOST,
       dialect: 'mysql'
     }
   );
 
 sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });

 module.exports =  sequelize;