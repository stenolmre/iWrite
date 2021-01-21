import connectDB from './../../../utils/connectDB'
import Poem from './../../../models/poem'

connectDB()

export default async function (req, res) {
  const { name, text } = req.body

  try {
    const poem = new Poem(req.body)

    if (!text) return res.status(401).json({ msg: 'Please add content to this post.' })

    await poem.save()

    res.send(poem)
  } catch (err) {
    res.status(500).json({ msg: 'Server Error', error: err.message })
  }
}
