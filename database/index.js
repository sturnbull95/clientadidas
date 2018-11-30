require('dotenv').config()
const Sequelize = require('sequelize');
// TODO source these attributes from a .env file

const connection = new Sequelize('postgres', 'postgres', 'postgres', {
  host: 'ec2-54-183-245-38.us-west-1.compute.amazonaws.com',
  port:5432,
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})


// connection
//     .authenticate()
//     .then(() => {
//         console.log('Connection to sql database successful!');
//     })
//     .catch(err => {
//         console.log('Unable to connect to database: ', err);
//     });


module.exports.connection = connection;
