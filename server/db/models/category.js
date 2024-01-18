'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Product}) {
      this.hasMany(Product, { foreignKey: 'category_id' });
      // define association here
    }
  }
  Category.init(
    {
      name: {
        allowNull: false,
        unique: true,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Category',
    }
  );
  return Category;
};
