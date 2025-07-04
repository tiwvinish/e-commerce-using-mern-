const {Router} = require('express')
const {Cms} = require('@/controllers')

const router = Router()

router.route('/')
    .get(Cms.brandsCtrl.index)
    .post(Cms.brandsCtrl.store)

// Show details of a specific brand by ID
router.get('/:id', Cms.brandsCtrl.show)

// Update details of a specific brand by ID
router.put('/:id', Cms.brandsCtrl.update)

// Delete a specific brand by ID
router.delete('/:id', Cms.brandsCtrl.destroy)

module.exports = router
