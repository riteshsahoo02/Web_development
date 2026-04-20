import { useEffect, useState } from 'react'
import api from '../services/api'
import SectionHeading from '../components/ui/SectionHeading'
import { createSpeechRecognition, scoreTranscript } from '../utils/speech'

export default function Speaking() {
  const [items, setItems] = useState([])
  const [transcript, setTranscript] = useState('')
  const [activeId, setActiveId] = useState(null)
  const [score, setScore] = useState(null)
  const [status, setStatus] = useState('')

  useEffect(() => {
    api.get('/content/speaking').then(({ data }) => setItems(data)).catch(() => setItems([]))
  }, [])

  const startSpeaking = (item) => {
    const recognition = createSpeechRecognition()
    if (!recognition) {
      setStatus('Speech recognition is not supported in this browser.')
      return
    }

    setStatus('Listening... speak now.')
    setActiveId(item._id)
    recognition.onresult = (event) => {
      const spoken = event.results[0][0].transcript
      const nextScore = scoreTranscript(item.expectedAnswer, spoken)
      setTranscript(spoken)
      setScore(nextScore)
      setStatus('Analysis complete.')
    }
    recognition.onerror = () => setStatus('Could not capture speech. Please try again.')
    recognition.start()
  }

  return (
    <section className="section-container py-16">
      <SectionHeading eyebrow="Speaking" title="Practice speaking with your microphone" subtitle="This MVP compares recognized speech with the expected answer and gives a quick match score." />
      <div className="mt-10 space-y-6">
        {items.map((item) => (
          <div key={item._id} className="card">
            <p className="text-sm uppercase tracking-wider text-brand-300">Prompt</p>
            <h3 className="mt-2 text-2xl font-bold text-white">{item.prompt}</h3>
            <p className="mt-3 text-slate-300">Expected answer: {item.expectedAnswer}</p>
            <p className="mt-1 text-sm text-slate-400">Hint: {item.hint}</p>
            <button onClick={() => startSpeaking(item)} className="primary-btn mt-6 py-2">Start speaking</button>
            {activeId === item._id && transcript && (
              <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-slate-400">You said</p>
                <p className="mt-2 text-white">{transcript}</p>
                <p className="mt-3 font-semibold text-brand-300">Match score: {score}%</p>
              </div>
            )}
          </div>
        ))}
      </div>
      {status && <p className="section-container mt-4 text-sm text-slate-300">{status}</p>}
    </section>
  )
}
