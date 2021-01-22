import mongoose from 'mongoose'
import { nanoid } from 'nanoid'

const UserSchema = mongoose.Schema({
  _id: {
    type: String,
    default: () => nanoid(5)
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

const User = mongoose.models.User || mongoose.model('User', UserSchema)

export default User
