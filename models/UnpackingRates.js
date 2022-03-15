import mongoose from 'mongoose'

const UnpackingRatesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a unpacking field'],
  },
})

module.exports =
  mongoose.models.UnpackingRates ||
  mongoose.model('UnpackingRates', UnpackingRatesSchema)
