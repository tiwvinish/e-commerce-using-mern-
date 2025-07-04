const { errorMsg, setNotFound } = require("@/lib/functions")
const { Orders, Details } = require("@/models")

class OrdersCtrl{

    index = async(req,res,next)=>{
        try{
            let orders = await Orders.aggregate()
                .lookup({from:'users',localField:'userID',foreignField:'_id',as:'user'})
     
            for(let i in orders){
                     let details = await Details.aggregate()
                     .match({orderId: orders._id})
                     .lookup({from:'products',localField:'productID',foreignField:'_id', as:'product'})
            
                    for(let j in details){
                     details[j].product = details[j].product[0]
                    }
                   orders[i]={
                     ...orders[i],
                     user:orders[i].user[0],
                     details
                   }  
            
                   }
                   res.send(orders)
     
           }catch(error)
           {
             errorMsg(next,error)
           }
     
  
  
       }

       destroy = async (req,res,next)=>{
        try{
            const {id} = req.params

            const order = await Orders.findById(id)

            if (order){
                await Details.deleteMany({orderID:order._id})
                await Orders.findByIdAndDelete(id)
                res.send({
                    message:"Deleted Successfully"
                })
            }else{ 
                setNotFound(next,'Review')
            }


        }catch(error){
            errorMsg(next,error)
        }
       }

       update = async (req,res,next)=>{
        try{
            const {id} = req.params
    
            const order = await Orders.findById(id)
    
            if (order){
              const{status}=req.body
               
                await Orders.findByIdAndUpdate(id,{status})
                res.send({
                    message:"Order Updated"
                })
            }else{ 
                setNotFound(next,'Order')
            }
    
    
        }catch(error){
            errorMsg(next,error)
        }
       }
}






module.exports = new OrdersCtrl