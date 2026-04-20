import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../services/api'

export default function ConversationPlay() {
  const { id } = useParams()
  const [scenario, setScenario] = useState(null)
  const [stepIndex, setStepIndex] = useState(0)
  const [feedback, setFeedback] = useState('')

  useEffect(() => {
    api.get(`/content/conversations/${id}`).then(({ data }) => setScenario(data)).catch(() => setScenario(null))
  }, [id])

  if (!scenario) {
    return <section className="section-container py-16 text-slate-300">Loading scenario...</section>
  }

  const step = scenario.steps[stepIndex]

  const handleChoice = (choice) => {
    if (choice === step.correctChoice) {
      setFeedback('Great choice. Moving to the next step...')
      setTimeout(() => {
        setFeedback('')
        setStepIndex((prev) => Math.min(prev + 1, scenario.steps.length - 1))
      }, 900)
    } else {
      setFeedback(`Not quite. Correct answer: ${step.correctChoice}`)
    }
  }

  return (
    <section className="section-container py-16">
      <div className="card mx-auto max-w-4xl">
        <p className="text-sm uppercase tracking-widest text-brand-300">Scenario</p>
        <h1 className="mt-3 text-3xl font-bold text-white">{scenario.title}</h1>
        <p className="mt-2 text-slate-300">{scenario.situation}</p>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm text-slate-400">Speaker</p>
          <p className="mt-2 text-lg font-semibold text-white">{step.speaker}</p>
          <p className="mt-4 text-2xl text-white">{step.line}</p>
          <p className="mt-3 text-slate-400">{step.translation}</p>
        </div>

        <div className="mt-6 grid gap-3">
          {step.choices.map((choice) => (
            <button key={choice} onClick={() => handleChoice(choice)} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-left text-slate-200 transition hover:bg-white/10">
              {choice}
            </button>
          ))}
        </div>

        {feedback && <p className="mt-5 text-sm text-brand-300">{feedback}</p>}
        <p className="mt-6 text-sm text-slate-400">Step {stepIndex + 1} of {scenario.steps.length}</p>
      </div>
    </section>
  )
}
