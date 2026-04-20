import mongoose from 'mongoose'

const grammarSchema = new mongoose.Schema(
  {
    language: String,
    title: String,
    explanation: String,
    pattern: String,
    examples: [
      {
        sentence: String,
        translation: String,
        breakdown: String
      }
    ],
    level: String
  },
  { timestamps: true }
)

export default mongoose.model('Grammar', grammarSchema)
