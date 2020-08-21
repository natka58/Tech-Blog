
// const Sequelize = require('sequelize');

// require('dotenv').config();

// let sequelize;

// // create connection to our db
// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PW,
//   {
//     host: "localhost",
//     dialect: "mysql",
//     port: 3306,
//   }
// );

require('dotenv').config();

require('dotenv').config();
const Sequelize = require('sequelize');
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
  // : new Sequelize('ecommerce_db', 'root', 'Solnish1', {
      host: 'localhost',
      port: 3306,
      dialect: 'mysql',
      dialectOptions: {
            decimalNumbers: true,
          },
     
    });

module.exports = sequelize;