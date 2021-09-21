import mongoose from 'mongoose'

const MovingRatesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a moving rate'],
  },
})

module.exports =
  mongoose.models.MovingRates ||
  mongoose.model('MovingRates', MovingRatesSchema)
