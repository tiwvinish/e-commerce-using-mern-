const validationError = (next,validation) =>{
    next({
        message:'There are some validation problem',
        status:422,
        validation,
        }
  )
}
const errorMsg = (next,error)=>{
  console.log(error)

    if('code' in error && error.code == 11000){
        validationError(next,{email:'Given Email is already used'
    })
 }else if('errors' in error){
    for(let k in error.errors){
        validationError(next,{[k]:error.errors[k].message})
    }
    }else{
        next({
            message:'Unable to process request',
            status:400
        })
 }
}

const setNotFound = (next,name = 'Data Not Found') =>{
    next({
        message:`${name} Not Found`,
        status:404
    })
}


module.exports = {validationError,errorMsg,setNotFound}