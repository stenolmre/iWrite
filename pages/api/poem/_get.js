import connectDB from './../../../utils/connectDB'
import Poem from './../../../models/poem'

connectDB()

export default async function (req, res) {
  try {
    const poems = await Poem.find().sort({ createdAt: -1 })

    if (!poems) return res.status(401).json({ msg: 'Poems not found.' })

    res.send(poems)
  } catch (err) {
    res.status(500).json({ msg: 'Server Error', error: err.message })
  }
}
