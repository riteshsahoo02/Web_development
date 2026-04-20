import { useEffect, useState } from 'react'
import api from '../services/api'
import SectionHeading from '../components/ui/SectionHeading'
import ScenarioCard from '../components/learning/ScenarioCard'

export default function Conversations() {
  const [items, setItems] = useState([])

  useEffect(() => {
    api.get('/content/conversations').then(({ data }) => setItems(data)).catch(() => setItems([]))
  }, [])

  return (
    <section className="section-container py-16">
      <SectionHeading eyebrow="Scenario practice" title="Roleplay realistic daily situations" subtitle="Start with branching scenarios like ordering food, travel, or meeting someone for the first time." />
      <div className="mt-10 grid gap-6 xl:grid-cols-2">
        {items.map((item) => <ScenarioCard key={item._id} item={item} />)}
      </div>
    </section>
  )
}
