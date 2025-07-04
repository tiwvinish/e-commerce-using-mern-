const {Router} = require('express')
const {adminOnly} =require('@/lib/middlewares')
const staffsRoutes= require('./staffs.routes')
const customersRoutes  = require('./customer.routes')
const categoriesRoutes = require('./categories.routes')
const brandsRoutes = require('./brands.routes')
const productsRoutes = require('./products.routes')
const reviewsRoutes  = require('./reviews.routes')
const ordersRoutes = require('./orders.routes')


const router = Router()

router.use('/staffs',adminOnly,staffsRoutes)
router.use('/customers',customersRoutes)
router.use('/categories',categoriesRoutes)
router.use('/brands',brandsRoutes)
router.use('/products',productsRoutes)
router.use('/reviews',reviewsRoutes)
router.use('/orders',ordersRoutes)

module.exports = router