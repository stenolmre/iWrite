import connectDB from './../../../utils/connectDB'
import Poem from './../../../models/poem'

connectDB()

export default async function (req, res) {
  const { id } = req.query

  const { name, text } = req.body

  let fields = {}
  if (name) fields.name = name
  if (text) fields.text = text

  try {
    let poem = await Poem.findById(id)

    if (poem) {
      poem = await Poem.findOneAndUpdate({
        _id: id
      },{
        $set: fields
      }, {
        new: true
      })

      return res.send(poem)
    }
  } catch (err) {
    res.status(500).json({ msg: 'Server Error', error: err.message })
  }
}
