var express = require('express');
var router = express.Router();
const SnackModel = require('../models/snack.model')
const SnackController = require('../controllers/snack.controller')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/snack', SnackController.getAllSnacks)
router.get('/snack/type/:snackType', SnackController.getSnackByType)

router.post('/snack/new', SnackController.createNewSnack)


module.exports = router;
 