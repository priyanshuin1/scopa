var express = require('express');

var router = express.Router();


const ctrlUser = require('../controllers/userControllers');

const jwtHelper = require('../config/jwtHelper');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);




module.exports = router;
