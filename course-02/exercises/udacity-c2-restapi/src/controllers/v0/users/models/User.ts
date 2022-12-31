import {
  Table,
  Column,
  Model,
  HasMany,
  PrimaryKey,
  CreatedAt,
  UpdatedAt,
} from "sequelize-typescript";

@Table // This decorator defines the model name in the database as 'users'
export class User extends Model<User> {
  @PrimaryKey // This decorator defines the column as the primary key
  @Column // This decorator defines the column name of email in the database
  public email!: string;

  @Column
  public password_hash!: string; // for nullable fields

  @Column 
  @CreatedAt
  public createdAt: Date = new Date();

  @Column
  @UpdatedAt
  public updatedAt: Date = new Date();

  short() {
    return {
      email: this.email,
    };
  }
}
