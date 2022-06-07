// Package / Require declarations
const sequelize = require('../config/connection.js');

const { Model, DataTypes } = require('sequelize');

// Extend Model for Category class
class Category extends Model {}

// Category Criteria 
Category.init(
  {
    // Column definitions
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        // Category name MUST be at least 4 characters long (since allowNull: false)
        len: [4]
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

// Export for external
module.exports = Category;
