import connectDB from './../../../utils/connectDB'
import Subscriber from './../../../models/subscriber'

connectDB()

export default async function (req, res) {
  const { subscriber } = req.body

  if (!subscriber) return res.status(401).json({ msg: 'Please add subscriber\'s email.' })

  try {
    const sub = new Subscriber(req.body)

    await sub.save()

    res.send({
      status: 'success',
      subscriber: sub
    })
  } catch (err) {
    res.status(500).json({ msg: 'Server Error', error: err.message })
  }
}
