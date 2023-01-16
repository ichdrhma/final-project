import {Sequelize} from "sequelize";

const db = new Sequelize('crud_db','root','root',{
    host: '127.0.0.1',
    dialect: 'mysql',
    dialectOptions: {
        socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
      }
});

export default db;