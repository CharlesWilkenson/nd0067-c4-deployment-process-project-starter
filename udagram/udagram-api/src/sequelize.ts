import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

export const sequelize = new Sequelize({
  username: 'postgres',
  password: 'myPassword',
  database: 'postgres',
  host: 'udagramdb.c4wf1rash89b.us-west-2.rds.amazonaws.com',

  dialect: "postgres",
  storage: ":memory:",
});
