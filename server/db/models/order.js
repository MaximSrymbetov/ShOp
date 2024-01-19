'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Order_item, Order_info, User }) {
      this.hasMany(Order_item, { foreignKey: 'order_id' });
      this.hasOne(Order_info, { foreignKey: 'order_id' });
      this.belongsTo(User, { foreignKey: 'user_id' });
      // define association here
    }
  }
  Order.init(
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
      status: {
        allowNull: false,
        defaultValue: 'created',
        type: DataTypes.TEXT,
      },
      total: {
        allowNull: false,
        defaultValue: '0',
        type: DataTypes.TEXT,
      },
      delivery_status: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: 'Order',
    }
  );
  return Order;
};
