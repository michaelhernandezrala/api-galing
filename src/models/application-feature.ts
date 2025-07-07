import {
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
import Feature from './feature.model';

@Table({
  tableName: 'application_features',
})
class ApplicationFeature extends Model {
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

  @ForeignKey(() => Application)
  @Column({
    type: DataType.UUID,
    allowNull: false,
    field: 'application_id',
  })
  applicationId!: string;

  @ForeignKey(() => Feature)
  @Column({
    type: DataType.UUID,
    allowNull: false,
    field: 'feature_id',
  })
  featureId!: string;

  @Default(true)
  @Column(DataType.BOOLEAN)
  enabled!: boolean;
}

export default ApplicationFeature;
