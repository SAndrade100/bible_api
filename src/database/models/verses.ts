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
import Book from "./books.ts"

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
        type: DataType.TEXT,
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
        allowNull: false,
    })
    declare updatedAt: Date;
}

export default Verse