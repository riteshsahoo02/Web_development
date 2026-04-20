import mongoose from 'mongoose'

const learnerProfileSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    nativeLanguage: { type: String, default: 'English' },
    targetLanguage: { type: String, default: 'Japanese' },
    level: { type: String, enum: ['beginner', 'intermediate', 'advanced'], default: 'beginner' },
    dailyGoal: { type: Number, default: 20 },
    streak: { type: Number, default: 0 }
  },
  { timestamps: true }
)

export default mongoose.model('LearnerProfile', learnerProfileSchema)
