import mongoose from 'mongoose'

const speakingExerciseSchema = new mongoose.Schema(
  {
    language: String,
    prompt: String,
    expectedAnswer: String,
    translation: String,
    hint: String,
    level: String
  },
  { timestamps: true }
)

export default mongoose.model('SpeakingExercise', speakingExerciseSchema)
