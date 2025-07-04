const { Router } = require('express');
const { Cms } = require('@/controllers'); // Assuming Cms contains the controllers
const router = Router();

router.route('/')
    .get(Cms.customersCtrl.index)  // Get all customers
    .post(Cms.customersCtrl.store)// Create a new customer

router.route('/:id')
    .get(Cms.customersCtrl.show)    // Get a specific customer by ID
    .put(Cms.customersCtrl.update)  // Update a specific customer by ID
    .patch(Cms.customersCtrl.update) // Partially update a specific customer by ID
    .delete(Cms.customersCtrl.destroy)// Delete a specific customer by ID

module.exports = router
