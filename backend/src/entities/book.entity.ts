import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/db';

interface BookAttributes {
  id: number;
  title: string;
  description: string;
  discountRate: number;
  coverImage: string;
  price: number;
}

interface BookCreationAttributes extends Optional<BookAttributes, 'id'> {}

class Book extends Model<BookAttributes, BookCreationAttributes> implements BookAttributes {
  public id!: number;
  public title!: string;
  public description!: string;
  public discountRate!: number;
  public coverImage!: string;
  public price!: number;
}

Book.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    discountRate: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    coverImage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Book',
  },
);

export default Book;
