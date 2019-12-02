const SnackModel = require('../schemas/snack.schema')

SnackModel.Insert = function() {

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

SnackModel.query = function() {
    return SnackModel.find().exec().then( (result => result)).catch( err => err)
}

module.exports = SnackModel