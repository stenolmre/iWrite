import bcrypt from 'bcryptjs'
import token from './../../../utils/signtoken'
import connectDB from './../../../utils/connectDB'
import User from './../../../models/user'
import validateEmail from './../../../utils/validateemail'

connectDB()

export default async function (req, res) {
  const { email, password } = req.body

  if (validateEmail(email) === false || password.length < 6) return res.status(401).json({ msg: 'Please enter valid user information.' })

  try {
    const user = await User.findOne({ email })

    if (!user) return res.status(404).json({ msg: 'Invalid user information.' })

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) return res.status(401).json({ msg: 'Invalid user information.' })

    res.json({
      status: 'success',
      token: token(user._id),
      user
    })
  } catch (err) {
    res.status(500).json({ msg: 'Server Error', error: err.message })
  }
}
