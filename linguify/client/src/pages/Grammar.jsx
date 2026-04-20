import { useEffect, useState } from 'react'
import api from '../services/api'
import GrammarCard from '../components/learning/GrammarCard'
import SectionHeading from '../components/ui/SectionHeading'

export default function Grammar() {
  const [items, setItems] = useState([])

  useEffect(() => {
    api.get('/content/grammar').then(({ data }) => setItems(data)).catch(() => setItems([]))
  }, [])

  return (
    <section className="section-container py-16">
      <SectionHeading eyebrow="Grammar" title="Understand the rules behind good sentences" subtitle="Each lesson includes pattern, explanation, and examples so learners can apply grammar immediately." />
      <div className="mt-10 grid gap-6 xl:grid-cols-2">
        {items.map((item) => <GrammarCard key={item._id} item={item} />)}
      </div>
    </section>
  )
}
