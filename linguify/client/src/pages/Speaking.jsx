import { useEffect, useMemo, useRef, useState } from 'react'
import api from '../services/api'
import SectionHeading from '../components/ui/SectionHeading'
import { fallbackSpeaking } from '../data/fallbackData'
import { createSpeechRecognition, scoreTranscript } from '../utils/speech'

export default function Speaking() {
  const recognitionRef = useRef(null)
  const [items, setItems] = useState([])
  const [transcript, setTranscript] = useState('')
  const [manualAnswer, setManualAnswer] = useState('')
  const [activeId, setActiveId] = useState(null)
  const [score, setScore] = useState(null)
  const [status, setStatus] = useState('')
  const [isListening, setIsListening] = useState(false)
  const [supported, setSupported] = useState(true)

  useEffect(() => {
    api
      .get('/content/speaking')
      .then(({ data }) => setItems(data?.length ? data : fallbackSpeaking))
      .catch(() => setItems(fallbackSpeaking))

    return () => recognitionRef.current?.stop?.()
  }, [])

  const activeItem = useMemo(() => items.find((item) => item._id === activeId), [items, activeId])

  const finishAttempt = (item, spoken) => {
    const nextScore = scoreTranscript(item.expectedAnswer, spoken)
    setTranscript(spoken)
    setManualAnswer(spoken)
    setScore(nextScore)
    setStatus(nextScore >= 75 ? 'Nice job — your answer is very close.' : 'Good try — check the target answer and repeat once more.')
  }

  const startSpeaking = async (item) => {
    recognitionRef.current?.stop?.()
    const recognition = createSpeechRecognition('ja-JP')
    if (!recognition) {
      setSupported(false)
      setActiveId(item._id)
      setStatus('Speech recognition is not supported in this browser. Use Chrome or Edge, or type your answer below to practice manually.')
      return
    }

    setSupported(true)
    setActiveId(item._id)
    setTranscript('')
    setManualAnswer('')
    setScore(null)
    setStatus('Preparing your microphone...')
    recognitionRef.current = recognition

    recognition.onstart = () => {
      setIsListening(true)
      setStatus('Listening now. Speak clearly and pause when you finish.')
    }

    recognition.onresult = (event) => {
      const result = Array.from(event.results)
        .map((entry) => entry[0]?.transcript || '')
        .join('')
        .trim()

      setTranscript(result)
      if (event.results[0]?.isFinal || event.results[event.results.length - 1]?.isFinal) {
        finishAttempt(item, result)
      } else {
        setStatus('Hearing you... keep going.')
      }
    }

    recognition.onerror = (event) => {
      setIsListening(false)
      const messageMap = {
        'not-allowed': 'Microphone permission was blocked. Allow microphone access and try again.',
        'audio-capture': 'No microphone was detected. Check your input device.',
        network: 'The browser speech service had a network issue. Try again in a moment.',
        'no-speech': 'No clear speech was detected. Try again and speak a little slower.',
        aborted: 'Speech recognition stopped before finishing.'
      }
      setStatus(messageMap[event.error] || `Speech error: ${event.error}`)
    }

    recognition.onend = () => {
      setIsListening(false)
      if (!transcript) setStatus((current) => current || 'Recognition ended. You can try again.')
    }

    try {
      recognition.start()
    } catch {
      setStatus('The browser could not start speech recognition. Please stop the previous attempt and retry.')
      setIsListening(false)
    }
  }

  const stopSpeaking = () => {
    recognitionRef.current?.stop?.()
    setIsListening(false)
    setStatus('Stopped listening. Review the transcript below or try again.')
  }

  const listenToAnswer = (item) => {
    if (!('speechSynthesis' in window)) {
      setStatus('Speech playback is not supported in this browser.')
      return
    }

    const utterance = new SpeechSynthesisUtterance(item.expectedAnswer)
    utterance.lang = 'ja-JP'
    utterance.rate = 0.9
    window.speechSynthesis.cancel()
    window.speechSynthesis.speak(utterance)
  }

  const checkManualAnswer = (item) => {
    setActiveId(item._id)
    finishAttempt(item, manualAnswer)
  }

  return (
    <section className="section-container py-16">
      <SectionHeading
        eyebrow="Speaking"
        title="Practice speaking with better microphone feedback"
        subtitle="Use the browser microphone when available, or type what you said and still get a match score while practicing."
      />

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <div className="rounded-[2rem] border border-brand-100 bg-[#fff8fa] p-5 text-sm text-ink-700/75">
          <p className="font-semibold text-ink-900">Best browser</p>
          <p className="mt-2">For speech recognition, use Chrome or Edge and allow microphone access when prompted.</p>
        </div>
        <div className="rounded-[2rem] border border-brand-100 bg-[#fff8fa] p-5 text-sm text-ink-700/75">
          <p className="font-semibold text-ink-900">Language setup</p>
          <p className="mt-2">This practice is tuned for Japanese recognition with <span className="font-semibold text-brand-700">ja-JP</span>.</p>
        </div>
        <div className="rounded-[2rem] border border-brand-100 bg-[#fff8fa] p-5 text-sm text-ink-700/75">
          <p className="font-semibold text-ink-900">Fallback mode</p>
          <p className="mt-2">If the mic fails, type your spoken answer manually and still get instant scoring.</p>
        </div>
      </div>

      <div className="mt-10 space-y-6">
        {items.map((item) => {
          const isActive = activeId === item._id
          return (
            <div key={item._id} className="card">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-wider text-brand-700">Prompt</p>
                  <h3 className="mt-2 text-2xl font-bold text-ink-900">{item.prompt}</h3>
                  <p className="mt-3 text-ink-700/80">Target answer: {item.expectedAnswer}</p>
                  <p className="mt-1 text-sm text-ink-700/60">Hint: {item.hint}</p>
                </div>
                <span className="rounded-full border border-brand-100 bg-[#fff8fa] px-3 py-1 text-xs font-semibold text-ink-700/70">
                  {item.level}
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <button onClick={() => startSpeaking(item)} className="primary-btn py-2">
                  {isListening && isActive ? 'Listening…' : 'Start speaking'}
                </button>
                <button onClick={stopSpeaking} className="secondary-btn py-2">Stop</button>
                <button onClick={() => listenToAnswer(item)} className="secondary-btn py-2">Play target</button>
              </div>

              <div className="mt-6 rounded-[2rem] border border-brand-100 bg-[#fff8fa] p-5">
                <label className="text-sm font-semibold text-ink-900">Manual fallback / practice text</label>
                <textarea
                  rows="3"
                  value={isActive ? manualAnswer : ''}
                  onChange={(e) => {
                    setActiveId(item._id)
                    setManualAnswer(e.target.value)
                  }}
                  placeholder="If your microphone does not work, type what you said here and check it manually."
                  className="mt-3 w-full rounded-2xl border border-brand-100 bg-white px-4 py-3 text-ink-900 outline-none transition focus:border-brand-300"
                />
                <button onClick={() => checkManualAnswer(item)} className="secondary-btn mt-3 py-2">Check typed answer</button>
              </div>

              {isActive && (transcript || manualAnswer || score !== null) && (
                <div className="mt-5 grid gap-4 lg:grid-cols-2">
                  <div className="rounded-2xl border border-brand-100 bg-[#fff8fa] p-4">
                    <p className="text-sm text-ink-700/60">Detected / checked answer</p>
                    <p className="mt-2 text-ink-900">{transcript || manualAnswer || '—'}</p>
                  </div>
                  <div className="rounded-2xl border border-brand-200 bg-brand-50 p-4">
                    <p className="text-sm text-ink-700/70">Score</p>
                    <p className="mt-2 text-3xl font-bold text-ink-900">{score ?? 0}%</p>
                    <p className="mt-2 text-sm text-ink-700/70">{score >= 75 ? 'Very close to the target answer.' : 'Try once more and match the rhythm of the target.'}</p>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {status && (
        <p className={`mt-4 text-sm ${supported ? 'text-ink-700/70' : 'text-amber-700'}`}>
          {status}
        </p>
      )}
    </section>
  )
}
