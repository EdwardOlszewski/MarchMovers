import dbConnect from '../../../utils/dbConnect'
import Company from '../../../models/Company'

dbConnect()

export default async function index(req, res) {
  const { method } = req

  switch (method) {
    case 'GET':
      try {
        const items = await Company.find({})
        res.status(200).json({ success: true, data: items })
      } catch (error) {
        const message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        res.status(400).json({ success: false, error: message })
      }
      break

    case 'POST':
      try {
        const items = await Company.create(req.body)
        res.status(200).json({ success: true, data: items })
      } catch (error) {
        const message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        res.status(400).json({ success: false, error: message })
      }
      break

    default:
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      res.status(400).json({ success: false, error: message })
      break
  }
}
