import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Covid = db.define('covids',{
    provinsi: DataTypes.STRING,
    kasus: DataTypes.INTEGER,
    kasusHarian: DataTypes.INTEGER,
    sembuh: DataTypes.INTEGER,
    kematian: DataTypes.INTEGER,
    meninggalHarian: DataTypes.INTEGER,
    RI: DataTypes.DOUBLE,
    CFR: DataTypes.DOUBLE,
    RasioLacak: DataTypes.DOUBLE,  
},{
    freezeTableName:true
});

export default Covid;

(async()=>{
    await db.sync();
})();