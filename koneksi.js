const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sql6475570', 'sql6475570', 'hHuH3UuRd3', {
  host: 'sql6.freemysqlhosting.net',
  dialect: 'mysql',
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