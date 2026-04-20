import { useEffect, useState } from 'react'
import api from '../services/api'
import WordCard from '../components/learning/WordCard'
import SectionHeading from '../components/ui/SectionHeading'

export default function Vocabulary() {
  const [items, setItems] = useState([])

  useEffect(() => {
    api.get('/content/vocabulary').then(({ data }) => setItems(data)).catch(() => setItems([]))
  }, [])

  return (
    <section className="section-container py-16">
      <SectionHeading eyebrow="Vocabulary" title="Build useful words by topic" subtitle="Learn greetings, travel, shopping, family, and more using clean card-based lessons." />
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => <WordCard key={item._id} item={item} />)}
      </div>
    </section>
  )
}
