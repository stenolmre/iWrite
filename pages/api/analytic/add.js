import connectDB from '@/utils/connectDB'
import Analytic from '@/models/analytic'

connectDB()

export default async function (req, res) {
  const { id } = req.body

  if (!id) return res.status(401).json({ msg: 'Statistilise näitaja ID on kohustuslik.' })

  try {
    const analytic = new Analytic(req.body)

    await analytic.save()

    const analytics = await Analytic.find().sort({ createdAt: -1 })

    res.send(analytics)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}
