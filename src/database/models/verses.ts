import {
    Table,
    Column,
    Model,
    DataType,
    CreatedAt,
    UpdatedAt,
    ForeignKey,
    PrimaryKey,
} from "sequelize-typescript"
import Book from "./books.js"
import { text } from "express"
import { INTEGER, STRING, DATE, NOW } from "sequelize"

@Table({
    timestamps: true,
    tableName: 'verses',
    modelName: 'Verse'
})
class Verse extends Model {
    @PrimaryKey
    @ForeignKey(() => Book)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    declare book: number

    @PrimaryKey
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    declare chapter: number

    @PrimaryKey
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    declare verse: number

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    declare text: string

    @CreatedAt
    @Column({
        type: DataType.DATE,
        defaultValue: DataType.NOW,
        allowNull: false,
    })
    declare createdAt: Date;

    @UpdatedAt
    @Column({
        type: DataType.DATE,
        defaultValue: DataType.NOW,
        allowNull: true,
    })
    declare updatedAt: Date;
}

export default Verse