'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Gender extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Product }) {
      this.hasMany(Product, { foreignKey: 'gender_id' });
      // define association here
    }
  }
  Gender.init(
    {
      name: {
        allowNull: false,
        unique: true,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Gender',
    }
  );
  return Gender;
};
