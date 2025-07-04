const {Schema,model} = require('mongoose') 
const {stringRequired,boolTrue,extraConfig}=require('../lib/constants')
  const userSchema = new Schema({
    name:stringRequired,
    email:{...stringRequired,unique:true},
    password:{...stringRequired,select:false},
    phone:{...stringRequired,maxLength:[30,'Phone must not be longer than 30 character']},
    address : stringRequired,
    role:{
        type:String,
        enum:['Admin','Staff','Customer'],
        default:'Customer',
        
    },
    status:boolTrue
  },extraConfig)

  const User = model('User',userSchema)//users
  module.exports = User