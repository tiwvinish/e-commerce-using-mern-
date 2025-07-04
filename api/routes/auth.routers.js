// const {Router} = require('express')
// const {auth} = require('../controllers')
// const router = Router()
// router.post('/Auth/register',auth.RegisterCtrl.register)
// module.exports = router 
const { Router } = require('express');
const RegisterCtrl = require('../controllers/Auth/register.controller'); // Import the instance directly
const loginCtrl = require('../controllers/Auth/login.controller')
const router = Router();

router.post('/Register', RegisterCtrl.register); // Access the method directly
router.post('/Login',loginCtrl.login);
module.exports = router
