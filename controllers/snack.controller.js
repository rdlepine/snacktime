
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
    SnackModel.createNewSnack().then( result => {
        return res.json(result)
    }).catch( (err) => {
        return res.json(err)
    })
  }

  //Retrieve 
  SnackController.getAllSnacks = (req, res, next) => {
      return SnackModel.getAll().then( (result => {
          return SnackModel.query().then( (result) => {
              return res.json(result)
          })
      })).catch( (err) => {
          return res.json(er)
      })
  }

  SnackController.getSnackByType = (req, res, next) => {
    const snackType = req.params.snackType
    return SnackModel.getByType({snack: snackType}).then( result =>  {
    
      res.json(result)
    }).catch( err => res.json(err))
  }
  
module.exports = SnackController