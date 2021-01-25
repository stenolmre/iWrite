import jwt from 'jsonwebtoken'
import connectDB from './../../../utils/connectDB'
import User from './../../../models/user'

connectDB()

export default async function getFromServer(req, res, jwtToken) {
  if (!jwtToken) return res.status(500).json({ msg: 'No token. Authorization denied.' })

  try {
    const decoded = jwt.verify(jwtToken, process.env.JWT_KEY)
    req.user = decoded.id

    const user = await User.findById(req.user)

    if (!user) return res.status(404).json({ msg: 'User not found.' })

    res.json({
      status: 'success',
      user
    })
  } catch (err) {
    res.status(500).json({ msg: 'Server Error', error: err.message })
  }
}
