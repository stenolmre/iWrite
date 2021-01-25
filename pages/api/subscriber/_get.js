import connectDB from './../../../utils/connectDB'
import Subscriber from './../../../models/subscriber'

connectDB()

export default async function (req, res) {
  try {
    const subs = await Subscriber.find()

    if (!subs) return res.status(401).json({ msg: 'Subscribers not found.' })

    res.send(subs)
  } catch (err) {
    res.status(500).json({ msg: 'Server Error', error: err.message })
  }
}
