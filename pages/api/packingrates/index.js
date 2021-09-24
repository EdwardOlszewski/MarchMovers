import dbConnect from '../../../utils/dbConnect'
import PackingRates from '../../../models/PackingRates'

dbConnect()

export default async function index(req, res) {
  const { method } = req

  switch (method) {
    case 'GET':
      try {
        const items = await PackingRates.find({})
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
        const items = await PackingRates.create(req.body)
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
