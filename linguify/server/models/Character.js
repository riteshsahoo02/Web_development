import mongoose from 'mongoose'

const characterSchema = new mongoose.Schema(
  {
    language: String,
    symbol: String,
    romanization: String,
    pronunciationAudio: String,
    strokeOrderImage: String,
    exampleWords: [String],
    order: Number
  },
  { timestamps: true }
)

export default mongoose.model('Character', characterSchema)
