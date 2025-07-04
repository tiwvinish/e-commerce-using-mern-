const {Router} = require('express')
const router = Router()

const productsRoutes = require('./product.routes')
const mixRoutes = require('./mix.routes')



router.use('/products',productsRoutes)

router.use(mixRoutes)

module.exports = router