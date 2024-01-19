'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Product }) {
      this.belongsTo(Product, { foreignKey: 'product_id' });
      // define association here
    }
  }
  Image.init(
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
      src: {
        allowNull: false,
        defaultValue: 'https://i.imgur.com/EJLFNOw.png',
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Image',
    }
  );
  return Image;
};
