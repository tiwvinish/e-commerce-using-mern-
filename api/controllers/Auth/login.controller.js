const { validationError,errorMsg } = require("@/lib/functions")
const {User} = require("../../models")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

class loginCtrl{
  login = async (req,res,next)=>{
try{
const {email,password}=req.body

const user = await User.findOne({email}).select('+password')
if(user){
  if(user.status){
    if(bcrypt.compareSync(password,user.password)){
      const token = jwt.sign({
        uid:user._id,
        iat:Math.floor(Date.now()/1000),
        exp: Math.floor(Date.now()) + 30*24*60*60

      },process.env.JWT_SECRET)
      res.send({token})
  }else{
    validationError({password:"Incorrect Password"})
  }

  }else{
  validationError(next,{email:'Given email is not activated'})
  }
}
else{
  validationError(next,{email:'Given email is not registered'})
}

}

   catch(error){
    errorMsg(next,error)
  }
}
}
module.exports=new loginCtrl








