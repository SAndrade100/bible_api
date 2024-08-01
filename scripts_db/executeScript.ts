import fs from 'fs'
import path from 'path'
import sequelize from '../src/database/database'

const readScript = (pathName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(pathName, 'utf8', (err, data) => {
            if(err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

const executeScript = async (pathName) => {
    try {
        const sql: any = await readScript(pathName)
        await sequelize.query(sql)
        console.log("Executado com sucesso.")
    } catch(error) {
        console.error('Erro ao executar.', error)
    } finally {
        await sequelize.close()
    }
}

const path_script = path.join(__dirname, 'table_books.sql')

executeScript(path_script)