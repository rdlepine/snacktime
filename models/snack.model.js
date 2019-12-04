const SnackModel = require('../schemas/snack.schema')

SnackModel.createNew = function(snackObject) {

    const newSnack = new SnackModel( {
        snack: 'cupcakes',
        store : true,
        savory: true,
        sweet: false,
        requiresPrep: true
    })

    return newSnack.save().then(result => {
        return result
    }).catch( err => {
       return err
    })
}

SnackModel.getAll = function() {
    return SnackModel.find().exec().then( (result => result)).catch( err => err)
}

SnackModel.getByType = function(snackType) {
    return SnackModel.find(snackType).exec()
                     .then( (result) => {
                         return result
                     })
                     .catch( err => {
                         return err
                     })
}

module.exports = SnackModel