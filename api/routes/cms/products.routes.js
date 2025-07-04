const {Router} = require('express')
const {Cms} =require('@/controllers')
const router = Router()
const {upload} = require('@/lib/middlewares')

router.route('/')
.get(Cms.productsCtrl.index)
.post(upload().array('images'),Cms.productsCtrl.store)

router.route('/:id')
.get(Cms.productsCtrl.show)
.put(upload().array('images'),Cms.productsCtrl.update)
.patch(upload().array('images'),Cms.productsCtrl.update)
.delete(Cms.productsCtrl.destroy)


router.delete('/:id/image/:filename',Cms.productsCtrl.destroyImage)

module.exports = router