import connectDB from './../../../utils/connectDB'
import Poem from './../../../models/poem'

connectDB()

export default async function (req, res) {
  const { id } = req.query

  try {
    const poem = await Poem.findById(id)

    if (!poem) return res.status(401).json({ msg: 'Poem not found.' })

    res.send(poem)
  } catch (err) {
    res.status(500).json({ msg: 'Server Error', error: err.message })
  }
}
