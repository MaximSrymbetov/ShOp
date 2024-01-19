'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Product }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsTo(Product, { foreignKey: 'product_id' });
      // define association here
    }
  }
  Review.init(
    {
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'cascade',
      },
      product_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Products',
          key: 'id',
        },
        onDelete: 'cascade',
      },
      text: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Review',
    }
  );
  return Review;
};
