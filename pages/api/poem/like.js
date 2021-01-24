import connectDB from './../../../utils/connectDB'
import Poem from './../../../models/poem'

connectDB()

export default async function (req, res) {
  const { id } = req.query
  const { like } = req.body

  if (!like) return res.status(401).json({ msg: 'Like is required.' })

  try {
    const poem = await Poem.findById(id)

    if (!poem) return res.status(404).json({ msg: 'Poem not found.' })

    await poem.likes.unshift(req.body)

    await poem.save()

    const poems = await Poem.find().sort({ createdAt: -1 })

    res.send({
      likes: poem.likes,
      poems: poems
    })
  } catch (err) {
    res.status(500).json({ msg: 'Server Error', error: err.message })
  }
}
