import fs from 'fs'
import path from 'path'
import sequelize from '../src/database/database'
import { query } from 'express'
import { map } from 'zod'

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
        const sql: any = await readScript(pathName);
        const insertStatements = sql.split('INSERT INTO verses VALUES').map(stmt => stmt.trim()).filter(stmt => stmt);

        const batchSize = 500;
        for (let i = 0; i < insertStatements.length; i += batchSize) {
            const batch = insertStatements.slice(i, i + batchSize);
            for (const statement of batch) {
                const insertStatement = `INSERT INTO verses VALUES ${statement}`;
                await sequelize.query(insertStatement);
            }
        }
        
        console.log("Executado com sucesso.");
    } catch (error) {
        console.error('Erro ao executar.', error);
    } finally {
        await sequelize.close();
    }
};


const path_script = path.join(__dirname, 'insert_books.sql')

executeScript(path_script)