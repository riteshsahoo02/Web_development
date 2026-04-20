import Progress from '../models/Progress.js'

const defaultProgress = [
  { type: 'Characters', score: 70, completed: true },
  { type: 'Vocabulary', score: 55, completed: false },
  { type: 'Grammar', score: 48, completed: false },
  { type: 'Sentences', score: 32, completed: false },
  { type: 'Listening', score: 22, completed: false },
  { type: 'Speaking', score: 15, completed: false },
  { type: 'Conversations', score: 8, completed: false }
]

export async function getMyProgress(req, res) {
  let records = await Progress.find({ user: req.user._id }).sort({ createdAt: 1 })

  if (records.length === 0) {
    records = await Progress.insertMany(defaultProgress.map((item) => ({ ...item, user: req.user._id, lastAttemptedAt: new Date() })))
  }

  res.json(records)
}

export async function updateProgress(req, res) {
  const { type, score, completed } = req.body
  const record = await Progress.findOneAndUpdate(
    { user: req.user._id, type },
    { score, completed, lastAttemptedAt: new Date() },
    { new: true, upsert: true }
  )
  res.json(record)
}
