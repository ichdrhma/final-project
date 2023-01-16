import {Sequelize} from "sequelize";
 
const db = new Sequelize('covid-api','root','root',{
    host: 'localhost',
    dialect: 'mysql'
});
 
export default db;