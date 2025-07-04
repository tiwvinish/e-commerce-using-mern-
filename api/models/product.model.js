const {Schema,model} = require('mongoose')
const {stringRequired,numRequired,boolTrue,extraConfig, foreignRel} = require('../lib/constants.js')
// const { boolean } = require('@/lib/cons.js')


const productSchema = new Schema({
name:stringRequired,
summary:stringRequired,
description:stringRequired,
price:numRequired,
brandId:{...foreignRel},
categoryId:{...foreignRel,ref:'Category',required:true},
discountedPrice:{...numRequired,default:0},
images:[stringRequired],
featured :boolTrue,
status:boolTrue
// {
//     type:boolean,default:true
// }



},{
extraConfig
} 
)
const Product=model('Product',productSchema)
module.exports = Product