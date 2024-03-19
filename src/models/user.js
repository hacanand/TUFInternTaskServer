'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({

    user_name: DataTypes.STRING,

    code_language: DataTypes.STRING,
    stdin: DataTypes.STRING,
    stdout: {
      type: DataTypes.STRING,
      defaultValue: 'Running',
      allowNull: true,
    },
    source_code: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};