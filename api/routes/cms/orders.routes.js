const {Router} = require('express')
const router = Router()
const {Cms} = require('@/controllers')

router.get('/',Cms.OrdersCtrl.index)

router.route('/:id')
  .put(Cms.OrdersCtrl.update)
  .patch(Cms.OrdersCtrl.update)
  .delete(Cms.OrdersCtrl.destroy)



module.exports = router