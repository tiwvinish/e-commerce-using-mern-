const {Schema,model} = require('mongoose')


const { extraConfig,foreignRel, stringRequired , boolTrue, numRequired} = require('../lib/constants')

const reviewSchema = new Schema({
    comment:stringRequired,
    rating:{...numRequired},
    productID:{...foreignRel,ref:'User'},
    userID:{...foreignRel,ref:'Product'}
},{
    status:boolTrue
},extraConfig
)
const Review = model('Review',reviewSchema)
module.exports = Review