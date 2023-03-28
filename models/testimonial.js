const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require('../db_config')

const Testimonial = sequelize.define("testimonial", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    photo: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    post: {
        type:   DataTypes.STRING,
    },
    testimonial_description: {
        type: DataTypes.STRING,
    },
    active: {
        type: DataTypes.INTEGER,
    }
 });

 module.exports = Testimonial;
