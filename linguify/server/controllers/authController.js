import bcrypt from 'bcryptjs'
import User from '../models/User.js'
import LearnerProfile from '../models/LearnerProfile.js'
import generateToken from '../utils/generateToken.js'

export async function registerUser(req, res) {
  try {
    const { name, email, password, nativeLanguage, targetLanguage, level } = req.body

    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' })
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
      name,
      email,
      password: hashedPassword
    })

    const profile = await LearnerProfile.create({
      user: user._id,
      nativeLanguage,
      targetLanguage,
      level
    })

    return res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      profile,
      token: generateToken(user._id)
    })
  } catch (error) {
    return res.status(500).json({ message: error.message || 'Registration failed' })
  }
}

export async function loginUser(req, res) {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' })
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' })
    }

    const profile = await LearnerProfile.findOne({ user: user._id })

    return res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      profile,
      token: generateToken(user._id)
    })
  } catch (error) {
    return res.status(500).json({ message: error.message || 'Login failed' })
  }
}

export async function getMe(req, res) {
  try {
    const profile = await LearnerProfile.findOne({ user: req.user._id })

    return res.json({
      _id: req.user._id,
      name: req.user.name,
      email: req.user.email,
      profile
    })
  } catch (error) {
    return res.status(500).json({ message: error.message || 'Could not fetch profile' })
  }
}