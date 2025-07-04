const {Schema,model} = require('mongoose')
const {stringRequiured,foreignRel, numRequired, boolTrue, extraConfig} = require('../lib/constants')

const detailsSchema = new Schema({
    productID:{...foreignRel,ref:'Order'},
    orderID:{...foreignRel,ref:'Product'},
    quantity: numRequired,
    price: numRequired,
    total:numRequired

},{
    status:boolTrue
},extraConfig)
const Details = model('Details',detailsSchema)
module.exports = Details