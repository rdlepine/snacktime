var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/snack', (req, res, next) => {
  res.render('index', {title: 'snack time'})
})

router.post('/snack/favorite', favoriteSnackController)

function favoriteSnackController(req, res, next) {
  if(req.body.snack == 'pudding') {
    return res.json({question: 'What flavor'})
  } else if(req.body.snack ===  'popcorn') {
    return res.json({question: 'chedda?'})
  } else {
    return res.json({comment: 'Thats not a real snack'})
  }
}

module.exports = router;
