'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      Order_item,
      Favorite,
      Review,
      Category,
      Gender,
      Image,
      Product_Size,
    }) {
      this.belongsTo(Order_item, { foreignKey: ' product_id' });
      this.belongsTo(Favorite, { foreignKey: ' product_id' });
      this.belongsTo(Review, { foreignKey: ' product_id' });
      this.belongsTo(Image, { foreignKey: ' product_id' });
      this.belongsTo(Product_Size, { foreignKey: ' product_id' });
      this.hasMany(Gender, { foreignKey: 'gender_id' });
      this.hasMany(Category, { foreignKey: 'category_id' });
      // define association here
    }
  }
  Product.init(
    {
      category_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Categories',
          key: 'id',
        },
        onDelete: 'cascade',
      },
      gender_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Genders',
          key: 'id',
        },
        onDelete: 'cascade',
      },
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      price: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Product',
    }
  );
  return Product;
};
