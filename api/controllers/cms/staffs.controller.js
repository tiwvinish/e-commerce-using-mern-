const { errorMsg, validationError,setNotFound } = require("@/lib/functions")
const { User } = require("@/models")

const bcrypt = require('bcryptjs')


class staffsCtrl{

 index = async (req,res,next)=>{
try{
   const staffs =await User.find({role:'Staff'})
   
   res.send(staffs)
    


}catch(error){

    errorMsg(next,error)
}
 }

 store = async(req,res,next)=>{
    
    try{
        const {name,email,password,confirmPassword,phone,address,status} = req.body;
 if(password==confirmPassword)   {
        const hashed = bcrypt.hashSync(password, 10)
       
        await User.create({name,email,password:hashed,phone,address,status,role:'Staff'})
     res.status(201).send({
        message:"Staff Added"
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




 
 show = async (req,res,next)=>{
    try{
     const { id } = req.params

        const staff= await User.findOne({role:'Staff'})

        if(staff){
            res.send(staff)
        }else{
            setNotFound(next,'Staff')
        }


    }
    catch(error){
        errorMsg(next,error)
        
    
    }
 }

 update = async(req,res,next)=>{
    try{
        const { id } = req.params
   
           const staff = await User.findOne({_id: id,role:'Staff'})
   
           if(staff){
               
            
        const {name,phone,address,status}=req.body

        await User.findByIdAndUpdate(id,{name,phone,address,status},{runValidators:true})

res.send({
   message:"Staff updated successfully"
})
           }else{
               setNotFound(next,'Staff')
           }
   
   
       }
       catch(error){
           errorMsg(next,error)
       
       }
    
    
 }

 destroy = async(req,res,next)=>{
    try{
        const { id } = req.params
   
           const staff = await User.findOne({_id: id,role:'Staff'})
   
           if(staff){
               
            
     

        await User.findByIdAndDelete(id)

res.send({
   message:"Staff deleted successfully"
})
           }else{
               setNotFound(next,'Staff')
           }
   
   
       }
       catch(error){
           errorMsg(next,error)
       
       }

    
 }



}
module.exports = new staffsCtrl


