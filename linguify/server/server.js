import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import authRoutes from './routes/authRoutes.js'
import contentRoutes from './routes/contentRoutes.js'
import progressRoutes from './routes/progressRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

dotenv.config()
connectDB()

const app = express()

app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173', credentials: true }))
app.use(express.json())
app.use(morgan('dev'))

app.get('/', (_req, res) => {
  res.json({ message: 'Linguify API is running' })
})

app.use('/api/auth', authRoutes)
app.use('/api/content', contentRoutes)
app.use('/api/progress', progressRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
