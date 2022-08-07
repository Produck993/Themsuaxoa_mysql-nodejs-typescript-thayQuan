import { DataSource } from "typeorm";

export const AppDataSorce = new DataSource({
    type : "mysql",
    host : "localhost",
    port : 3306,
    username  : "root",
    password : "123456",
    database : "user_manager",
    logging : false,
    synchronize : true,
    entities : ['./dist/src/model/*.js']
})