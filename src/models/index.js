const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.USER, process.env.PASS, {
  host: process.env.HOST ,
  dialect: 'mysql'
});
 
try {
   sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}