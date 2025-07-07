import { Column, CreatedAt, DataType, Default, Model, PrimaryKey, Table, UpdatedAt } from 'sequelize-typescript';

@Table({
  tableName: 'applications',
})
class Application extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
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
  name!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  description?: string;

  @Default(true)
  @Column(DataType.BOOLEAN)
  enabled!: boolean;

  @Default('free')
  @Column({
    type: DataType.ENUM('free', 'pro', 'premium'),
    allowNull: false,
  })
  plan!: 'free' | 'pro' | 'premium';
}

export default Application;
