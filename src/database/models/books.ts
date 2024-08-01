import { INTEGER, STRING, DATE, NOW } from "sequelize"
import {
    Table,
    Column,
    Model,
    DataType,
    CreatedAt,
    UpdatedAt
} from "sequelize-typescript"

@Table({
    timestamps: true,
    tableName: 'books',
    modelName: 'Book'
})
class Book extends Model {

    @Column({
        primaryKey: true,
        type: DataType.INTEGER
    })
    declare id: number

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        unique: true
    })
    declare idx: number

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true
    })
    declare book: string

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true
    })
    declare alt: string

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true
    })
    declare abbr: string

    @CreatedAt
    @Column({
        type: DataType.DATE,
        defaultValue: DataType.NOW,
        allowNull: false,
    })
    declare createdAt: Date

    @UpdatedAt
    @Column({
        type: DataType.DATE,
        defaultValue: DataType.NOW,
        allowNull: false,
    })
    declare updatedAt: Date
}

export default Book