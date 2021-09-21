import mongoose from 'mongoose'

const CompanySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a company name'],
  },
})

module.exports =
  mongoose.models.Company || mongoose.model('Company', CompanySchema)
