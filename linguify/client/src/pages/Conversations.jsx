import { useEffect, useState } from 'react'
import api from '../services/api'
import SectionHeading from '../components/ui/SectionHeading'
import ScenarioCard from '../components/learning/ScenarioCard'
import { fallbackConversations } from '../data/fallbackData'

export default function Conversations() {
  const [items, setItems] = useState([])
  const [status, setStatus] = useState('')

  useEffect(() => {
    api
      .get('/content/conversations')
      .then(({ data }) => {
        const nextItems = data?.length ? data : fallbackConversations
        setItems(nextItems)
        setStatus(data?.length ? '' : 'Showing starter scenarios. Seed the database again to load the longer conversation set.')
      })
      .catch(() => {
        setItems(fallbackConversations)
        setStatus('Could not load scenarios from the backend, so starter content is shown.')
      })
  }, [])

  return (
    <section className="section-container py-16">
      <SectionHeading eyebrow="Scenario practice" title="Roleplay realistic daily situations" subtitle="These scenarios are now longer, with multiple turns so the conversation feels more natural and less like a one-question quiz." />
      {status && <p className="mt-4 text-sm text-brand-600">{status}</p>}
      <div className="mt-10 grid gap-6 xl:grid-cols-2">
        {items.map((item) => <ScenarioCard key={item._id} item={item} />)}
      </div>
    </section>
  )
}
