
const SnackModel = require('../models/snack.model')

const SnackController = {}

SnackController.favoriteSnackController = (req, res, next) => {
    if(req.body.snack == 'pudding') {
      return res.json({question: 'What flavor'})
    } else if(req.body.snack ===  'popcorn') {
      return res.json({question: 'chedda?'})
    } else {
      return res.json({comment: 'Thats not a real snack'})
    }
  }
  
  SnackController.createNewSnack  = (req, res, next) =>  {
    SnackModel.Insert().then( result => {
        return res.json(result)
    }).catch( (err) => {
        return res.json(err)
    })
  }

  //Retrieve 
  SnackController.retrieveSnacks = (req, res, next) => {
      return SnackModel.query().then( (result => {
          return SnackModel.query().then( (result) => {
              return res.json(result)
          })
      })).catch( (err) => {
          return res.json(er)
      })
  }
  
module.exports = SnackController