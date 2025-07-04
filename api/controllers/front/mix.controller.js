const { errorMsg, setNotFound } = require("@/lib/functions")
const { Categories, Brands, Orders, Product, Details } = require("@/models")

class MixCtrl{

  categories = async (req,res,next)=>{

try{
   

   const categories = await Categories.find()

   res.send(categories)

}catch(error){
  errorMsg(next,error)
}

  }

  
  
  categoryById = async (req,res,next)=>{
try{
const {id} = req.params

const category = await Categories.findOne({_id: id})

if(category){
res.send(category)
}else{
  return setNotFound(next,'Category')
}


}catch(error){
  errorMsg(next,error)
}



  }





  
  
  brands = async (req,res,next)=>{

    try{
   

      const brands = await Brands.find()
   
      res.send(brands)
   
   }catch(error){
     errorMsg(next,error)
   }
  }

  
  
  
  brandsById = async (req,res,next)=>{


    try{
      const {id} = req.params
      
      const brand = await Brands.findOne({_id: id})
      
      if(brand){
      res.send(brand)
      }else{
        return setNotFound(next,'Brand')
      }
      
      
      }catch(error){
        errorMsg(next,error)
      }
      
  }




  

  
  
  
  checkout = async (req,res,next)=>{

   try{
    const cart = req.body

    const order = await Orders.create({userID : req.user._id})

     for(let item of cart){
      const product = await Product.findById(item.id)
      

     let price = product.discountedPrice>0?product.discountedPrice : product.price
     let total = price*item.qty

await Details.create({productID: item.id, orderID: order._id,qty:item.qty,price,total})

     }

     res.send({
      message:'Thank you for purchase order'
     })
   }catch(error){
    errorMsg(next,error)
   }

  }

  
  
  
  image = async (req,res,next)=>{
    
const{ filename } = req.params

    res.sendFile(`uploads/${filename}`,{
         root:'./'
    
    })

  
}

  


}

module.exports = new MixCtrl