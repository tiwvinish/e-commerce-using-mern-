const {Product,Review} = require('@/models')
const{errorMsg, setNotFound} = require('@/lib/functions')
class ProductsCtrl{
    latest = async(req,res,next)=>{

     try{
          const products = await Product.find({status:true}).sort({createdAt:'desc'}) 
        
          res.send(products)


     }catch(error){
        errorMsg(next,error)
     }

    }



    featured = async (req,res,next)=>{

        try{
            const products = await Product.find({status:true, featured:true})
          
            res.send(products)
  
  
       }catch(error){
          errorMsg(next,error)
       }
    }



    topSelling = async (req,res,next)=>{
     try{
        const products = await Product.aggregate()
           .match({status:true})
           .lookup({from:'details', localField:'_id',foreignField:'productId',as:'details_count'})
           .addFields({details_count: {$size:'$details_count'}})
           .sort({details_count:'desc'})

           res.send(products)
     }catch(error){
        errorMsg(next,error)
     }


    }

    
    
    byId = async(req,res,next)=>{
try{

    const {id} = req.params

    const product = await Product.findOne({_id: id, status:true})
    
     
        

    if(product){
        let reviews = await Review.aggregate()
        .match({productID:product._id})  
        .lookup({from:'users', localField:'userID',foreignField:'_id' ,as:'user'})

   for(let i in reviews){
    reviews[i].user = reviews[i].user[0]
   }


          res.send({...product.toJSON(),reviews})

    }else{
        setNotFound(next,'Product')
    }

}catch(error){
    errorMsg(next,error)
}

    }

    
    
    
    
    byCategoryId = async(req,res,next)=>{
        try{

            const {id} = req.params
        
            const product = await Product.findOne({status:true, categoryId: id})
            
           
                  res.send(product)
        
           
        
        }catch(error){
            errorMsg(next,error)
        }
        
    }

    
    
    
    byBrandId = async(req,res,next)=>{

        try{

            const {id} = req.params
        
            const product = await Product.find({status:true, brandId: id})
            
           
                  res.send(product)
        
           
        
        }catch(error){
            errorMsg(next,error)
        }
    }

    
    
    
    
    similar = async(req,res,next)=>{

        try{

            const {id} = req.params
        
            const product = await Product.findOne({_id: id, status:true})
            
            const similars = await Product.find({status: true,categoryId : product.categoryId,_id:{$ne: product._id}})

                  res.send(similars)
        
         
        
        }catch(error){
            errorMsg(next,error)
        }
    }

    
    
    
    search = async (req,res,next) =>{

        
        try{
                  const {term} = req.query

            const products = await Product.find({status:true, name:{$regex: term, $options:'i'} })
          
            res.send(products)
  
  
       }catch(error){
          errorMsg(next,error)
       }
    }

    
    
    
    
    
    review = async (req,res,next)=>{

      try{
        const {id} = req.params
        
        const product = await Product.findOne({_id: id, status:true})

     if(product){
      const {comment,rating}=req.body

      await Review.create({comment,rating,productID: id,userID: req.user._id})

    res.send({
        message:'Thank you for your review.'
    })


     }else{
        setNotFound(next,'Product')
     }


      }catch(error)
      {
        errorMsg(next,error)
      }

    }


}

module.exports = new ProductsCtrl