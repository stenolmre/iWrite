import connectDB from './../../../utils/connectDB'
import Poem from './../../../models/poem'

connectDB()

export default async function (req, res) {
  const { id, likeId } = req.query

  try {
    const poem = await Poem.findById(id)

    if (!poem) return res.status(404).json({ msg: 'Poem not found.' })

    const like = poem.likes.find(x => x.id === likeId)

    if (!like) return res.status(404).json({ msg: 'Like not found.' })

    await like.remove()

    await poem.save()

    res.send(poem.likes)
  } catch (err) {
    res.status(500).json({ msg: 'Server Error', error: err.message })
  }
}
