const {Router} = require('express')
const router = Router()
const {Cms} = require('@/controllers')

router.get('/',Cms.ReviewsCtrl.index)

router.delete('/:id',Cms.ReviewsCtrl.destroy)

module.exports = router

