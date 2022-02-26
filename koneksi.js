const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('webservice', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
      dialectOptions: {
      useUTC: false, // for reading from database
    },
  timezone: "+07:00"
});

try {
    sequelize.authenticate();
    sequelize.sync({ alter: true });
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
}

module.exports = sequelize;