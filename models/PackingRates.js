import mongoose from 'mongoose'

const PackingRatesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a moving rate'],
  },
})

module.exports =
  mongoose.models.PackingRates ||
  mongoose.model('PackingRates', PackingRatesSchema)
