import express from 'express'
import {
  getCharacters,
  getConversations,
  getConversationById,
  getGrammar,
  getListening,
  getSentences,
  getSpeaking,
  getVocabulary
} from '../controllers/contentController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.get('/characters', protect, getCharacters)
router.get('/vocabulary', protect, getVocabulary)
router.get('/grammar', protect, getGrammar)
router.get('/sentences', protect, getSentences)
router.get('/listening', protect, getListening)
router.get('/speaking', protect, getSpeaking)
router.get('/conversations', protect, getConversations)
router.get('/conversations/:id', protect, getConversationById)

export default router
