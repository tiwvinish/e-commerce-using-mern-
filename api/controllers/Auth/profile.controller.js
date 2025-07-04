const { errorMsg, validationError } = require("@/lib/functions")
const { User, Review, Orders, Details } = require("@/models")
const bcrypt = require('bcryptjs')
const {Types} = require('mongoose')

class ProfileCtrl {
    show = async (req,res,next)=>{
        res.send(req.user)

    }
    update= async (req,res,next)=>{
     try{

        const {name,phone,address}=req.body

         await User.findByIdAndUpdate(req.user._id,{name,phone,address},{runValidators:true})

res.send({
    message:"Profile updated successfully"
})

     }catch(error){
        errorMsg(next,error)
     }
    }


    password = async (req,res,next)=>{

        try{

            const {oldPassword,newPassword,confirmPassword}=req.body
    
         const user =await User.findById(req.user._id).select('+password')
             
          if(bcrypt.compareSync(oldPassword,user.password)){
            if(newPassword===confirmPassword){
            
                const hashed = bcrypt.hashSync(newPassword,10)
             
            
             await User.findByIdAndUpdate(req.user._id,{password:hashed},{runValidators:true})

             res.send({
                message:"Password Updated"
             })

            }else{
             validationError(next,{newPassword:"New password is not confirmed"})
          }
          
          
        } 
          else{
            validationError(next,{oldPassword:'Old password is incorrect'})
          }

         }
         catch(error){
            errorMsg(next,error)
       
       
        }
        }
    
     reviews = async(req,res,next)=>{
      try{
        let reviews = await Review.aggregate()
        .match({userID: new Types.ObjectId(req.user._id)}) 
        .lookup({from:'products',localField:'productID',foreignField:'_id', as:'product'})

      for(let i in reviews){
     reviews[i].product = reviews[i].product[0]
     

      }
        res.send(reviews)


      }catch(error)
      {
        errorMsg(next,error)
      }


     }


     
     
     orders = async(req,res,next)=>{

      try{
       const orders = await Orders.find({userID:req.user._id})


       for(let i in orders){
                let details = await Details.aggregate()
                .match({orderId: orders._id})
                .lookup({from:'products',localField:'productID',foreignField:'_id', as:'product'})
       
               for(let j in details){
                details[j].product = details[j].product[0]
               }
              orders[i]={
                ...orders[i].toJSON(),
                details
              }  
       
              }
              res.send(orders)

      }catch(error)
      {
        errorMsg(next,error)
      }

     }


}
     module.exports = new ProfileCtrl 