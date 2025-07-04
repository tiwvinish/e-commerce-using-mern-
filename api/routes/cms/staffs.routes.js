const {Router} = require('express')
const {Cms} =require('@/controllers')
const router = Router()

router.route('/')
.get(Cms.staffsCtrl.index)
.post(Cms.staffsCtrl.store)

router.route('/:id')
.get(Cms.staffsCtrl.show)
.put(Cms.staffsCtrl.update)
.patch(Cms.staffsCtrl.update)
.delete(Cms.staffsCtrl.destroy)


module.exports = router