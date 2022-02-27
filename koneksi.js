const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('myoptikwebservice', 'admin', '0DiL69Ga', {
  host: 'mysql-70386-0.cloudclusters.net',
  port: 18812,
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