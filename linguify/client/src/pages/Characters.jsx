import { useEffect, useState } from 'react'
import api from '../services/api'
import CharacterCard from '../components/learning/CharacterCard'
import SectionHeading from '../components/ui/SectionHeading'

export default function Characters() {
  const [items, setItems] = useState([])

  useEffect(() => {
    api.get('/content/characters').then(({ data }) => setItems(data)).catch(() => setItems([]))
  }, [])

  return (
    <section className="section-container py-16">
      <SectionHeading eyebrow="Characters" title="Learn the script with sound and examples" subtitle="Start with the core characters of your target language and build reading comfort early." />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => <CharacterCard key={item._id} item={item} />)}
      </div>
    </section>
  )
}
