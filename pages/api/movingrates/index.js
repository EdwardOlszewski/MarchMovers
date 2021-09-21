import dbConnect from '../../../utils/dbConnect'
import MovingRates from '../../../models/MovingRates'

dbConnect()

export default async (req, res) => {
  const { method } = req

  switch (method) {
    case 'GET':
      try {
        const items = await MovingRates.find({})
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
        const items = await MovingRates.create(req.body)
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
