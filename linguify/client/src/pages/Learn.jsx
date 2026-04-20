import ModuleCard from '../components/ui/ModuleCard'
import SectionHeading from '../components/ui/SectionHeading'
import { modules } from '../data/fallbackData'

export default function Learn() {
  return (
    <section className="section-container py-16">
      <SectionHeading eyebrow="Learning roadmap" title="Move from basics to full conversations" subtitle="Each module is designed to build on the previous one so learners gain confidence step by step." />
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {modules.map((module, index) => (
          <ModuleCard
            key={module.key}
            title={module.title}
            desc={module.desc}
            path={module.path}
            accent={index % 2 === 0 ? 'from-brand-500 to-cyan-400' : 'from-violet-500 to-fuchsia-400'}
          />
        ))}
      </div>
    </section>
  )
}
