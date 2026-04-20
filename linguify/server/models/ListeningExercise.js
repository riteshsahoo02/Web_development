import mongoose from 'mongoose'

const listeningExerciseSchema = new mongoose.Schema(
  {
    language: String,
    promptText: String,
    audio: String,
    options: [String],
    correctAnswer: String,
    difficulty: String,
    topic: String
  },
  { timestamps: true }
)

export default mongoose.model('ListeningExercise', listeningExerciseSchema)
