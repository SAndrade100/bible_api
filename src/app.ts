import sequelize from './database/database.js'
import app from './config/config.js'
import dotenv from 'dotenv'

dotenv.config()
const port = process.env.PORT_API ? parseInt(process.env.PORT_API) : 3000

try {
    await sequelize.authenticate()
    await sequelize.sync()

    app.listen(port, () => {
        console.table({
            status: "Working",
            port: port,
            URL: `http://localhost:${process.env.PORT_API}`
        })
    })
} catch(err) {
    console.error("Unable to connect to the database:", err)
}
