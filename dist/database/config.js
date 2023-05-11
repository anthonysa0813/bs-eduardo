"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize("airline", "bsale_test", "bsale_test", {
    host: "mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com",
    dialect: "mysql",
});
exports.default = db;
//# sourceMappingURL=config.js.map