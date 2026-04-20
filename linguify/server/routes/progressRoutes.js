import express from 'express'
import { getMyProgress, updateProgress } from '../controllers/progressController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.get('/me', protect, getMyProgress)
router.post('/update', protect, updateProgress)

export default router
