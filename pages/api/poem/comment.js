import connectDB from './../../../utils/connectDB'
import Poem from './../../../models/poem'

connectDB()

export default async function (req, res) {
  const { id } = req.query
  const { name, comment } = req.body

  if (!comment || !name) return res.status(401).json({ msg: 'Name and comment is required.' })

  try {
    const poem = await Poem.findById(id)

    if (!poem) return res.status(404).json({ msg: 'Poem not found.' })

    await poem.comments.unshift(req.body)

    await poem.save()

    res.send(poem.comments)
  } catch (err) {
    res.status(500).json({ msg: 'Server Error', error: err.message })
  }
}
