const {Router} = require('express')
const {Cms} = require('@/controllers')

const router = Router()

router.route('/')
.get(Cms.categoriesCtrl.index)
.post(Cms.categoriesCtrl.store)


// Show details of a specific category by ID
router.get('/:id', Cms.categoriesCtrl.show)

// Update details of a specific category by ID
router.put('/:id', Cms.categoriesCtrl.update)

// Delete a specific category by ID
router.delete('/:id', Cms.categoriesCtrl.destroy)

module.exports = router
