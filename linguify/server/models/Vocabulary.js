import mongoose from 'mongoose'

const vocabularySchema = new mongoose.Schema(
  {
    language: String,
    word: String,
    translation: String,
    romanization: String,
    audio: String,
    image: String,
    topic: String,
    difficulty: String,
    examples: [String]
  },
  { timestamps: true }
)

export default mongoose.model('Vocabulary', vocabularySchema)
