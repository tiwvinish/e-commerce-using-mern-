require('module-alias/register')

const express = require('express')

const cors = require('cors')
const routes= require('./routes')
const {config} = require('dotenv')
const mongoose = require('mongoose')
const User = require('./models/user.model')
const Details = require('./models/details.model')

config()
const port = process.env.API_PORT || 5000
const mongoUrl =process.env.MONGO_URL 
const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/api',routes)


app.use((req,res,next)=>{
  next({

    message:'Resourse Not Found',
    Status:404
  })
})


app.use((error, req, res, next)=>{
    res.status(error.status || 400)
    .send({
        message: error.message ||'Something went wrong',
        validation:error.validation
})
})

app.listen(port,async()=>{
    console.log(`Server started at http://localhost:${port}`)
    console.log('Press to stop')
    await mongoose.connect(mongoUrl)
    console.log('MongoDB Connected Successfully !!')
    
})