import bcrypt from 'bcryptjs'
import token from './../../../utils/signtoken'
import connectDB from './../../../utils/connectDB'
import User from './../../../models/user'
import validateEmail from './../../../utils/validateemail'

connectDB()

export default async function (req, res) {
  const { isAdmin, name, email, password } = req.body

  if (!name || !email) return res.status(401).json({ msg: 'Please fill all the fields with correct information.' })
  if (validateEmail(email) === false) return res.status(401).json({ msg: 'Please enter valid email.' })
  if (!password || password.length < 6) return res.status(401).json({ msg: 'Please enter password with 6 or more characters.' })

  try {
    const user = await User.findOne({ email })

    if (user) return res.status(401).json({ msg: 'User is already registered.' })

    const newUser = new User(req.body)

    const salt = await bcrypt.genSalt(10)
    newUser.password = await bcrypt.hash(password, salt)

    await newUser.save()

    res.json({
      status: 'success',
      token: token(newUser._id),
      newUser
    })
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}
