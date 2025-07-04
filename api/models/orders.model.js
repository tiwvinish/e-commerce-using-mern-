const {Schema,model} = require('mongoose')
const {foreignRel, stringRequired, extraConfig} = require('../lib/constants')

const orderSchema = new Schema({
    userID:{...foreignRel,ref:'User'},
    status:{
        type:String,
        enum:['Processing','Confirmed','Shipping','Delivered','Cancelled'],
        default:'Processing'
    }
},extraConfig
)
const Orders = model('Orders',orderSchema)
module.exports = Orders