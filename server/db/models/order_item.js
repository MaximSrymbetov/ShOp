'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order_item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Order,Product}) {
      this.belongsTo(Order, { foreignKey: 'product_id' });
      this.belongsTo(Product, { foreignKey: 'order_id' });
      // define association here
    }
  }
  Order_item.init(
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
      order_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Orders',
          key: 'id',
        },
        onDelete: 'cascade',
      },
      quantity: {
        allowNull: false,
        defaultValue: '1',
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Order_item',
    }
  );
  return Order_item;
};
