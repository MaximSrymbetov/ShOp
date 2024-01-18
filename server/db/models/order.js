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
      this.hasOne(Order_item, { foreignKey: 'Order_info' });
      this.hasMany(Order_info, { foreignKey: 'Order_info' });
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
        defaultValue: 'CREATED',
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
