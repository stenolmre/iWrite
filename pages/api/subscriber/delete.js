import connectDB from './../../../utils/connectDB'
import Subscriber from './../../../models/subscriber'

connectDB()

export default async function (req, res) {
  const { subscriber } = req.body

  if (!subscriber) return res.status(401).json({ msg: 'Please enter valid email.' })

  try {
    const subs = await Subscriber.find()

    const findSubscriber = subs.find(x => x.subscriber === subscriber)

    if (!findSubscriber) return res.status(404).json({ msg: 'Please enter valid email.' })

    await findSubscriber.remove()

    const newSubsArray = await Subscriber.find()

    res.send(newSubsArray)
  } catch (err) {
    res.status(500).json({ msg: 'Server Error', error: err.message })
  }
}
