import { Sequelize } from 'sequelize-typescript'

const sequelize = new Sequelize({
  database: process.env.POSTGRES_DB || "",
  password: process.env.POSTGRES_PASSWORD || "",
  username: process.env.POSTGRES_USER || "",
  host: process.env.POSTGRES_HOST || "",
  dialect: (process.env.POSTGRES_DIALECT as any) || "postgres",
  models: [__dirname + "/models"]
})

export default sequelize
