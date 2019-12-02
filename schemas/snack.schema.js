const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.Promise = require('bluebird')

const SnackSchema = new Schema({

    snack: {
        type: String,
        validate: {
            validator: (value) => !/s$/.test(value),
            message: (property) => `${property.value} should not be plural.` 
        }
    },
    store: Boolean,
    requiresPrep: Boolean,
    savory: Boolean,
    sweet: {
        type: Boolean,
        required: [true, 'Stupid']
    }
}, {

    timestamps: true
}
)

const SnackModel = mongoose.model('Snack', SnackSchema)

module.exports = SnackModel