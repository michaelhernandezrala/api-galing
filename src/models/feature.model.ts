import { Column, CreatedAt, DataType, Model, PrimaryKey, Table, UpdatedAt } from 'sequelize-typescript';

@Table({
  tableName: 'features',
})
class Feature extends Model {
  @PrimaryKey
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  override id!: string;

  @CreatedAt
  @Column({ field: 'created_at' })
  override createdAt!: Date;

  @UpdatedAt
  @Column({ field: 'updated_at' })
  override updatedAt!: Date;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  code!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  description?: string;
}

export default Feature;
