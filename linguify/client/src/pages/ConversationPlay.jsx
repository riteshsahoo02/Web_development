import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../services/api'
import { fallbackConversations } from '../data/fallbackData'

export default function ConversationPlay() {
  const { id } = useParams()
  const [scenario, setScenario] = useState(null)
  const [stepIndex, setStepIndex] = useState(0)
  const [feedback, setFeedback] = useState('')
  const [history, setHistory] = useState([])
  const [finished, setFinished] = useState(false)

  useEffect(() => {
    api
      .get(`/content/conversations/${id}`)
      .then(({ data }) => setScenario(data))
      .catch(() => {
        const fallbackScenario = fallbackConversations.find((item) => item._id === id) || fallbackConversations[0] || null
        setScenario(fallbackScenario)
      })
  }, [id])

  const step = useMemo(() => scenario?.steps?.[stepIndex], [scenario, stepIndex])

  if (!scenario || !step) {
    return <section className="section-container py-16 text-ink-700/70">Loading scenario...</section>
  }

  const handleChoice = (choice) => {
    const isCorrect = choice === step.correctChoice
    const nextHistory = [
      ...history,
      { speaker: step.speaker, line: step.line, translation: step.translation },
      { speaker: 'You', line: choice, translation: isCorrect ? 'Your selected reply' : 'Your attempted reply', isUser: true, correct: isCorrect }
    ]
    setHistory(nextHistory)

    if (isCorrect) {
      const isLastStep = stepIndex === scenario.steps.length - 1
      setFeedback(isLastStep ? 'Excellent — you completed the whole conversation.' : 'Great choice. Continue the dialogue.')
      if (isLastStep) {
        setFinished(true)
      } else {
        setStepIndex((prev) => prev + 1)
      }
    } else {
      setFeedback(`Not quite. The best response here is: ${step.correctChoice}`)
    }
  }

  const restart = () => {
    setStepIndex(0)
    setFeedback('')
    setHistory([])
    setFinished(false)
  }

  return (
    <section className="section-container py-16">
      <div className="mx-auto grid max-w-6xl gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="card h-fit">
          <p className="kicker mb-4">Scenario</p>
          <h1 className="mt-1 text-3xl font-bold text-ink-900">{scenario.title}</h1>
          <p className="mt-2 text-ink-700/80">{scenario.situation}</p>

          <div className="mt-6 rounded-[2rem] border border-brand-100 bg-[#fff8fa] p-5">
            <p className="text-sm text-ink-700/60">Progress</p>
            <p className="mt-2 text-2xl font-bold text-ink-900">{finished ? scenario.steps.length : stepIndex + 1} / {scenario.steps.length}</p>
            <div className="mt-4 h-3 overflow-hidden rounded-full bg-brand-100/80">
              <div className="h-full rounded-full bg-gradient-to-r from-brand-500 to-[#f2d19a]" style={{ width: `${(((finished ? scenario.steps.length : stepIndex + 1) / scenario.steps.length) * 100).toFixed(0)}%` }} />
            </div>
          </div>

          <button onClick={restart} className="secondary-btn mt-6 w-full py-2">Restart scenario</button>
          {feedback && <p className="mt-5 text-sm text-brand-700">{feedback}</p>}
        </div>

        <div className="card">
          {!finished ? (
            <>
              <div className="rounded-3xl border border-brand-100 bg-[#fff8fa] p-6">
                <p className="text-sm text-ink-700/60">Speaker</p>
                <p className="mt-2 text-lg font-semibold text-ink-900">{step.speaker}</p>
                <p className="mt-4 text-2xl text-ink-900">{step.line}</p>
                <p className="mt-3 text-ink-700/70">{step.translation}</p>
              </div>

              <div className="mt-6 grid gap-3">
                {step.choices.map((choice) => (
                  <button key={choice} onClick={() => handleChoice(choice)} className="rounded-2xl border border-brand-100 bg-white px-4 py-4 text-left text-ink-800 transition hover:border-brand-300 hover:bg-brand-50/70">
                    {choice}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="rounded-3xl border border-brand-200 bg-brand-50/75 p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-brand-700">Completed</p>
              <h2 className="mt-3 text-2xl font-bold text-ink-900">Nice work — you finished the conversation.</h2>
              <p className="mt-3 text-ink-700/75">Replay it once more and try to say each correct response aloud before you click it.</p>
            </div>
          )}

          <div className="mt-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">Conversation history</p>
            <div className="mt-4 space-y-3">
              {history.length === 0 && <p className="text-sm text-ink-700/70">Your dialogue history will appear here as you progress.</p>}
              {history.map((entry, index) => (
                <div
                  key={`${entry.line}-${index}`}
                  className={`rounded-2xl border px-4 py-3 ${entry.isUser ? 'ml-8 border-brand-200 bg-brand-50/80' : 'mr-8 border-brand-100 bg-[#fff8fa]'}`}
                >
                  <p className="text-xs uppercase tracking-[0.24em] text-ink-700/55">{entry.speaker}</p>
                  <p className="mt-2 text-ink-900">{entry.line}</p>
                  <p className="mt-1 text-sm text-ink-700/70">{entry.translation}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
