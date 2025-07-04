const { errorMsg,setNotFound } = require("@/lib/functions")
const { Product } = require("@/models")
const {multer} = require('multer')
const {unlinkSync} = require("node:fs")



class productsCtrl{

 index = async (req,res,next)=>{
try{
   let products =await Product.aggregate()
       .lookup({from:'categories',localField:'categoryId', foreignField:'_id' ,as :'category'})
   
       .lookup({from:'brands',localField:'brandId', foreignField:'_id' ,as :'brand'})

        for(let i in products){
           products[i].category =products[i].category[0]
           products[i].brand =products[i].brand[0]
        }


   res.send(products)
    


}catch(error){

    errorMsg(next,error)
}
 }

 store = async(req,res,next)=>{
    
    try{
        const {name,summary,decription,price,discountedPrice,categoryId,brandId,featured,status} = req.body

        let images = req.files.map(file =>file.filename)

        await Product.create({name,summary,decription,price,discountedPrice,categoryId,brandId,featured,status,images})

    res.status(201).send({
        message: "Product created successfully",
    })

    }catch(error){
errorMsg(next,error)
}
}




 
 show = async (req,res,next)=>{
    try{
     const { id } = req.params

        const product= await Product.findById(id)

        if(product){
            res.send(product)
        }else{
            setNotFound(next,'Product')
        }


    }
    catch(error){
        errorMsg(next,error)
        
    
    }
 }

 update = async(req,res,next)=>{
    try{
        const { id } = req.params
   
           const product = await Product.findById(id)
   
           if(product){
               
            
            const {name,summary,decription,price,discountedPrice,categoryId,brandId,featured,status} = req.body

let images = [...product.images]

    if(req.files.length>0){
     for(let img of req.files){
        images.push(img.filename)
     }
    }

        await Product.findByIdAndUpdate(id, {name,summary,decription,price,discountedPrice,categoryId,
            brandId,featured,status,images},{runValidators: true})

res.send({
   message:"Product updated successfully"
})
           }else{
               setNotFound(next,'Product')
           }
   
   
       }
       catch(error){
           errorMsg(next,error)
       
       }
    
    
 }

 destroy = async(req,res,next)=>{
    try{
        const { id } = req.params
   
           const product = await Product.findById(id)
   
           if(product){
               for(let img of product.images){
               unlinkSync(`upload/${img}`)
               }
            
     

        await Product.findByIdAndDelete(id)

res.send({
   message:"Product deleted successfully"
})
           }else{
               setNotFound(next,'Product')
           }
   
   
       }
       catch(error){
           errorMsg(next,error)
       
       }

    
 }

   destroyImage = async (req,res,next) =>{

    try{
        const { id ,filename} = req.params
   
           const product = await Product.findById(id)
   
           if(product){
            if(product.images.length > 1){
                     
            unlinkSync(`uploads/${filename}`)

            let images = product.images.filter(file => file!= filename)
 
            await Product.findByIdAndUpdate(id,{images})
 
 res.send({
    message:"Product deleted successfully"
 })
            }else{
                next({
                    message :'Atleast one image is required',
                    status:403
                })
            }
            
         
           }else{
               setNotFound(next,'Product')
           }
   
   
       }
       catch(error){
           errorMsg(next,error)
       
       }

    
 }
   }


module.exports = new productsCtrl


