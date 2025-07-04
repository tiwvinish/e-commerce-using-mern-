const multer = require('multer')

const auth = async (req,res,next) =>{
 const jwt = require('jsonwebtoken')
 const {User} = require('@/models')   
    try {
        if('authorization' in req.headers){
           const token = req.headers.authorization.split(' ').pop()
        
           const decoded = jwt.verify(token,process.env.JWT_SECRET)
        const user = await User.findOne({_id:decoded.uid,status:true})
        console.log(user)
    if(user){
        req.user=user
        
        next()

    }else{
        next({
            message:'Authorization Token is invalid',
            status:401
          })
    }
    
    }else{
            next({
                message:'Authorization token is missing',
                status:401
            })
        }

    }catch(error)
    {
          next({
            message:'Authorization Token is invalid',
            status:401
          })
    }

   

}

const cmsOnly = async (req,res,next)=>{
    if(req.user.role=='Customer'){
        next({
          message:'Access Denied',
          status:403,


        })
    }else{
        next()
    }
}

const adminOnly = async (req,res,next)=>{
    if(req.user.role!='Admin'){
        next({
          message:'Access Denied',
          status:403,


        })
    }else{
        next()
    }
}

const upload =()=> multer({
    storage:multer.diskStorage({
        destination:(req,file,cb)=>{
              cb(null,'./uploads')
        },
        filename:(req,file,cb)=>{
            const ext = file.originalname.split('.').pop()
            const filename = Date.now()+ '-' + Math.round(Math.random() * 1E9) + `.${ext}`
        
           cb(null, filename)
        }
    }),
    fileFilter:(req,file,cb) =>{
        if(file.mimetype.startsWith('image/'))
            {
              cb(null, true)
        }
        else{
            cb(new Error('File type not supported'))
        }
    }
})



const customerOnly = async (req,res,next)=>{
    if(req.user.role!='Customer'){
        next({
          message:'Access Denied',
          status:403,


        })
    }else{
        next()
    }
}


module.exports = {auth,cmsOnly,adminOnly,upload,customerOnly}