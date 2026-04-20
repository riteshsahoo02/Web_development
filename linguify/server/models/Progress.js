import mongoose from 'mongoose'

const progressSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, required: true },
    completed: { type: Boolean, default: false },
    score: { type: Number, default: 0 },
    lastAttemptedAt: Date
  },
  { timestamps: true }
)

export default mongoose.model('Progress', progressSchema)
