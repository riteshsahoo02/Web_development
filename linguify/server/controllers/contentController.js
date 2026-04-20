import Character from '../models/Character.js'
import Vocabulary from '../models/Vocabulary.js'
import Grammar from '../models/Grammar.js'
import Sentence from '../models/Sentence.js'
import ListeningExercise from '../models/ListeningExercise.js'
import SpeakingExercise from '../models/SpeakingExercise.js'
import ConversationScenario from '../models/ConversationScenario.js'

export const getCharacters = async (_req, res) => res.json(await Character.find().sort({ order: 1 }))
export const getVocabulary = async (_req, res) => res.json(await Vocabulary.find())
export const getGrammar = async (_req, res) => res.json(await Grammar.find())
export const getSentences = async (_req, res) => res.json(await Sentence.find())
export const getListening = async (_req, res) => res.json(await ListeningExercise.find())
export const getSpeaking = async (_req, res) => res.json(await SpeakingExercise.find())
export const getConversations = async (_req, res) => res.json(await ConversationScenario.find())
export const getConversationById = async (req, res) => {
  const scenario = await ConversationScenario.findById(req.params.id)
  if (!scenario) {
    res.status(404)
    throw new Error('Scenario not found')
  }
  res.json(scenario)
}
