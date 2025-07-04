const {Schema,model} = require('mongoose')
const {numRequired, stringRequired, extraConfig, boolTrue} = require('../lib/constants')

const brandSchema = new Schema({
    name: {type: String, required: stringRequired, unique: true},
    description: {type: String, required: stringRequired},
    status:boolTrue

},extraConfig)
const Brands=model('Brands',brandSchema)
module.exports = Brands