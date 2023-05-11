import { Sequelize } from "sequelize";

const db = new Sequelize("airline", "bsale_test", "bsale_test", {
  host: "mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com",
  dialect: "mysql",
});

export default db;
