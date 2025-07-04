const { Router } = require('express');
const {auth, customerOnly} = require('../lib/middlewares')
const router = Router()
const ProfileCtrl = require('../controllers/Auth/profile.controller');
const profileController = require('../controllers/Auth/profile.controller');
router.get('/details',ProfileCtrl.show)
router.route('/update')
.put(ProfileCtrl.update)
.patch(ProfileCtrl.update)

router.route('/password')
.put(ProfileCtrl.password)
.patch(ProfileCtrl.password)


router.get('/reviews',customerOnly,ProfileCtrl.reviews)
router.get('/orders',customerOnly,ProfileCtrl.orders)

module.exports = router
