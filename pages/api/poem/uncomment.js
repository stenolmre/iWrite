import connectDB from './../../../utils/connectDB'
import Poem from './../../../models/poem'

connectDB()

export default async function (req, res) {
  const { id, commentId } = req.query

  try {
    const poem = await Poem.findById(id)

    if (!poem) return res.status(404).json({ msg: 'Poem not found.' })

    const comment = poem.comments.find(x => x.id === commentId)

    if (!comment) return res.status(404).json({ msg: 'Comment not found.' })

    await comment.remove()

    await poem.save()

    res.send(poem.comments)
  } catch (err) {
    res.status(500).json({ msg: 'Server Error', error: err.message })
  }
}
