const bcrypt = require('bcryptjs')
const { validationError,errorMsg } = require("@/lib/functions");
const User = require('@/models/user.model');

class RegisterCtrl{
    register = async(req,res,next)=>{
        // res.send(req.body)
        try{
            const {name,email,password,confirmPassword,phone,address} = req.body;
     if(password==confirmPassword)   {
            const hashed = bcrypt.hashSync(password,bcrypt.genSaltSync(10))
           
            await User.create({name,email,password:hashed,phone,address})
         res.status(201).send({
            message:"Thank you for Registrating",
         })
        } 
        else{
        validationError(next,{
            message:"Password and Confirm Password do not match",
        })
        }
 }catch(error){
    errorMsg(next,error)
}
}
}
module.exports =new RegisterCtrl