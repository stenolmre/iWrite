import mongoose from 'mongoose'
import { nanoid } from 'nanoid'

const PoemSchema = mongoose.Schema({
  _id: {
    type: String,
    default: () => nanoid(5)
  },
  name: String,
  text: {
    type: String,
    required: true
  },
  likes: [
    {
      like: Boolean
    }
  ],
  comments: [
    {
      name: {
        type: String,
        required: true
      },
      comment: {
        type: String,
        required: true
      }
    }
  ]
}, {
  timestamps: true
})

const Poem = mongoose.models.Poem || mongoose.model('Poem', PoemSchema)

export default Poem
