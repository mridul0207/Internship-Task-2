const sequelize = require('./config');
const {DataTypes} = require('sequelize');
const Profiles = sequelize.define("profiles", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    url:{
      type: DataTypes.STRING,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    followers:{
      type: DataTypes.STRING,
    },
    connections:{
      type: DataTypes.STRING,
    }
 });
 
 sequelize.sync().then(() => {
    console.log('Profiles table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
});

module.exports = Profiles;