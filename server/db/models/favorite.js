'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Product, User }) {
      this.belongsTo(User, { foreignKey: ' user_id' });
      this.belongsTo(Product, { foreignKey: 'product_id' });
      // define association here
    }
  }
  Favorite.init(
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
    },
    {
      sequelize,
      modelName: 'Favorite',
    }
  );
  return Favorite;
};
