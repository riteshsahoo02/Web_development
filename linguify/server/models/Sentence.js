import mongoose from 'mongoose'

const sentenceSchema = new mongoose.Schema(
  {
    language: String,
    sentence: String,
    translation: String,
    romanization: String,
    audio: String,
    topic: String,
    grammarPoints: [String]
  },
  { timestamps: true }
)

export default mongoose.model('Sentence', sentenceSchema)
