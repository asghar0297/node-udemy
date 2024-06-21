const Sequelize = require('sequelize')
const sequelize = require('../util/database')

const Product = sequelize.define('product', {
  id:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title:{
    type: Sequelize.STRING,
    allowNull: false,
  },
  price:{
    type: Sequelize.DOUBLE,
    allowNull: false,
    defaultValue:0
  },
  description:{
    type: Sequelize.STRING,
    allowNull: false,
  },
  imageUrl:{
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue:'https://www.publicdomainpictures.net/pictures/10000/velka/1-1210009435EGmE.jpg'
  }
})

module.exports = Product;