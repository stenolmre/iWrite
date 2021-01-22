import connectDB from './../../../utils/connectDB'
import Poem from './../../../models/poem'

connectDB()

export default async function (req, res) {
  const { id } = req.query

  try {
    const poem = await Poem.findById(id)

    if (!poem) return res.status(404).json({ msg: 'Poem not found.' })

    const selectLike = poem.likes.slice(0, 1).map(x => x._id)
    console.log(selectLike);

    const like = poem.likes.find(x => x._id === selectLike[0])
    console.log(like)

    if (!like) return res.status(404).json({ msg: 'Like not found.' })

    await like.remove()

    await poem.save()

    res.send(poem.likes)
  } catch (err) {
    res.status(500).json({ msg: 'Server Error', error: err.message })
  }
}
