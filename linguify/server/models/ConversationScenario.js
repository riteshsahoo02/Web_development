import mongoose from 'mongoose'

const conversationScenarioSchema = new mongoose.Schema(
  {
    language: String,
    title: String,
    situation: String,
    level: String,
    steps: [
      {
        speaker: String,
        line: String,
        translation: String,
        choices: [String],
        correctChoice: String
      }
    ]
  },
  { timestamps: true }
)

export default mongoose.model('ConversationScenario', conversationScenarioSchema)
