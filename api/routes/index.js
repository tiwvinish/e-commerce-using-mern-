const {Router} = require('express')
const {auth,cmsOnly} =require('../lib/middlewares')

const router = Router()

const frontRoutes = require('./front')
const authRoutes = require('./auth.routers')
const profileRoutes = require('./profile.routes')
const cmsRoutes = require('./cms')


router.use('/Auth',authRoutes)
router.use('/Profile',auth , profileRoutes)

router.use('/cms',auth,cmsOnly,cmsRoutes)

router.use(frontRoutes)

module.exports = router