const {Schema,model} = require('mongoose')
const {stringRequired, boolTrue, extraConfig}= require('../lib/constants')
const categorySchema = new Schema({
    name:stringRequired,
    description:stringRequired,
    status:boolTrue
    
},extraConfig)


const Categories =model('Categories',categorySchema)
  module.exports = Categories
