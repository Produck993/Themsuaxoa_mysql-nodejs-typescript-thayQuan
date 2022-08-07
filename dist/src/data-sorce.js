"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSorce = void 0;
const typeorm_1 = require("typeorm");
exports.AppDataSorce = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "user_manager",
    logging: false,
    synchronize: true,
    entities: ['./dist/src/model/*.js']
});
//# sourceMappingURL=data-sorce.js.map