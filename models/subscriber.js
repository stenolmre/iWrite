import mongoose from 'mongoose'
import { nanoid } from 'nanoid'

const SubscriberSchema = mongoose.Schema({
  _id: {
    type: String,
    default: () => nanoid(5)
  },
  subscriber: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

const Subscriber = mongoose.models.Subscriber || mongoose.model('Subscriber', SubscriberSchema)

export default Subscriber
