import { useEffect, useState } from 'react'
import api from '../services/api'
import SentenceCard from '../components/learning/SentenceCard'
import SectionHeading from '../components/ui/SectionHeading'

export default function Sentences() {
  const [items, setItems] = useState([])

  useEffect(() => {
    api.get('/content/sentences').then(({ data }) => setItems(data)).catch(() => setItems([]))
  }, [])

  return (
    <section className="section-container py-16">
      <SectionHeading eyebrow="Sentences" title="Practice everyday sentence patterns" subtitle="These lessons connect vocabulary and grammar into natural daily-use expressions." />
      <div className="mt-10 grid gap-6 xl:grid-cols-2">
        {items.map((item) => <SentenceCard key={item._id} item={item} />)}
      </div>
    </section>
  )
}
