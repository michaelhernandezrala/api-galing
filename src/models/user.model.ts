import {
  BeforeCreate,
  BeforeUpdate,
  Column,
  CreatedAt,
  DataType,
  Default,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import Application from './application.model';

@Table({
  tableName: 'users',
})
class User extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  override id!: string;

  @ForeignKey(() => Application)
  @Column({
    type: DataType.UUID,
    field: 'application_id',
  })
  applicationId!: string;

  @CreatedAt
  @Column({ field: 'created_at' })
  override createdAt!: Date;

  @UpdatedAt
  @Column({ field: 'updated_at' })
  override updatedAt!: Date;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  name?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    unique: true,
  })
  email?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  password?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    field: 'server_key',
  })
  serverKey?: string;

  @Column({
    type: DataType.ENUM('human', 'server'),
    allowNull: false,
  })
  type!: 'human' | 'server';

  @Default(true)
  @Column(DataType.BOOLEAN)
  enabled!: boolean;

  @BeforeCreate
  @BeforeUpdate
  static validateConditionalFields(instance: User) {
    if (instance.type === 'human') {
      if (!instance.email || !instance.password) {
        throw new Error('Email and password are required for human users');
      }
    }
    if (instance.type === 'server') {
      if (!instance.serverKey) {
        throw new Error('Server key is required for server users');
      }
    }
  }
}

export default User;
