const {Schema} = require('mongoose')
const stringRequired ={type:String,require:true}
const boolTrue = {type:Boolean,default:true}
const numRequired ={type:Number,require:true}
const foreignRel = {type:Schema.Types.ObjectId,required:true}
const extraConfig=
{
    timestamps:true,
    autoCreate:true,
    autoIndex:true
  }
module.exports = {stringRequired,boolTrue,extraConfig,numRequired,foreignRel}