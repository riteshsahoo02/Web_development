import { useEffect, useMemo, useState } from 'react'
import api from '../services/api'
import CharacterCard from '../components/learning/CharacterCard'
import StrokePracticeCanvas from '../components/learning/StrokePracticeCanvas'
import SectionHeading from '../components/ui/SectionHeading'
import { fallbackCharacters } from '../data/fallbackData'

export default function Characters() {
  const [items, setItems] = useState([])
  const [selectedId, setSelectedId] = useState('')
  const [status, setStatus] = useState('')

  useEffect(() => {
    api
      .get('/content/characters')
      .then(({ data }) => {
        const nextItems = data?.length ? data : fallbackCharacters
        setItems(nextItems)
        setSelectedId(nextItems[0]?._id || '')
        setStatus(data?.length ? '' : 'Showing starter character data. Run the seed command to load the full database content.')
      })
      .catch(() => {
        setItems(fallbackCharacters)
        setSelectedId(fallbackCharacters[0]?._id || '')
        setStatus('Could not load character data from the backend, so starter practice content is shown instead.')
      })
  }, [])

  const selectedCharacter = useMemo(
    () => items.find((item) => item._id === selectedId) || items[0],
    [items, selectedId]
  )

  return (
    <section className="section-container py-16">
      <SectionHeading
        eyebrow="Characters"
        title="Learn the script with sound, stroke order, and trace practice"
        subtitle="Choose a character card below, review the stroke steps, and practice writing directly on the canvas."
      />

      {status && <p className="mt-4 max-w-3xl text-sm text-brand-700">{status}</p>}

      {selectedCharacter && (
        <div className="mt-10 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="card overflow-hidden">
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div>
                <p className="kicker mb-4">Selected character</p>
                <div className="mt-4 flex items-end gap-4">
                  <span className="text-7xl font-bold text-ink-900 md:text-8xl">{selectedCharacter.symbol}</span>
                  <div className="pb-2">
                    <p className="text-2xl font-bold text-ink-900">{selectedCharacter.romanization}</p>
                    <p className="mt-1 text-sm text-ink-700/70">{selectedCharacter.language}</p>
                  </div>
                </div>
              </div>
              <div className="rounded-[1.5rem] border border-brand-100 bg-brand-50/75 px-5 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-700">Quick facts</p>
                <p className="mt-3 text-sm text-ink-700/75">Stroke count: <span className="font-semibold text-ink-900">{selectedCharacter.strokeCount || selectedCharacter.strokeTips?.length || '—'}</span></p>
                <p className="mt-1 text-sm text-ink-700/75">Examples: <span className="font-semibold text-ink-900">{selectedCharacter.exampleWords?.join(', ') || '—'}</span></p>
              </div>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-[2rem] border border-brand-100 bg-[#fff8fa] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">Stroke order</p>
                <ol className="mt-4 space-y-3">
                  {(selectedCharacter.strokeTips || ['Start with a light trace over the guide.', 'Repeat the shape slowly until it feels smooth.']).map((tip, index) => (
                    <li key={tip} className="flex gap-3 rounded-2xl border border-brand-100 bg-white/75 p-4 text-sm text-ink-700/75">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-50 font-semibold text-brand-700">{index + 1}</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <StrokePracticeCanvas symbol={selectedCharacter.symbol} />
            </div>
          </div>

          <div className="rounded-[2rem] border border-brand-100 bg-white/80 p-5 shadow-card">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">How to practice</p>
            <div className="mt-4 space-y-4 text-sm text-ink-700/75">
              <p>1. Trace the faint guide slowly two or three times.</p>
              <p>2. Clear the board and write the character from memory.</p>
              <p>3. Say the sound aloud while you write to connect reading, speaking, and motor memory.</p>
              <p>4. Move to the next card once your spacing and balance feel consistent.</p>
            </div>
          </div>
        </div>
      )}

      <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => (
          <CharacterCard
            key={item._id}
            item={item}
            selected={selectedCharacter?._id === item._id}
            onSelect={(picked) => setSelectedId(picked._id)}
          />
        ))}
      </div>
    </section>
  )
}
