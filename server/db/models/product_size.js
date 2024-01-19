'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product_Size extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Product, Size }) {
      this.belongsTo(Size, { foreignKey: 'size_id' });
      this.belongsTo(Product, { foreignKey: 'product_id' });
      // define association here
    }
  }
  Product_Size.init(
    {
      product_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Products',
          key: 'id',
        },
        onDelete: 'cascade',
      },
      size_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Sizes',
          key: 'id',
        },
        onDelete: 'cascade',
      },
    },
    {
      sequelize,
      modelName: 'Product_Size',
    }
  );
  return Product_Size;
};
