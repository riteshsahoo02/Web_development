import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BookOpen, Languages, Mic, Volume2, MessageSquareMore, Sparkles } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'

const features = [
  { icon: Languages, title: 'Characters to fluency', desc: 'Start from script basics and move toward real conversations.' },
  { icon: BookOpen, title: 'Smart lesson structure', desc: 'Learn vocabulary, grammar, and sentences in guided order.' },
  { icon: Volume2, title: 'Listening practice', desc: 'Build comprehension through interactive audio-based exercises.' },
  { icon: Mic, title: 'Speaking practice', desc: 'Use your microphone to practice and compare your answers.' },
  { icon: MessageSquareMore, title: 'Scenario roleplay', desc: 'Practice shopping, travel, greetings, and daily-life situations.' },
  { icon: Sparkles, title: 'Modern learner dashboard', desc: 'Track streaks, completion, and your current progress path.' }
]

export default function Home() {
  return (
    <div>
      <section className="section-container py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="kicker mb-5">
              Sakura theme · 日本語 inspired UI
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="max-w-3xl text-5xl font-bold tracking-tight text-ink-900 md:text-6xl">
              Learn any language with a calm sakura studio feel.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-6 max-w-2xl text-lg leading-8 text-ink-700/80">
              Linguify helps learners move from script basics to listening, speaking, grammar, and scenario-based conversations in a warm Japanese-inspired interface.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-8 flex flex-wrap gap-4">
              <Link to="/register" className="primary-btn">Start Learning</Link>
              <Link to="/learn" className="secondary-btn">View Modules</Link>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15 }} className="relative">
            <div className="absolute -left-8 top-8 h-24 w-24 rounded-full bg-brand-200/60 blur-3xl" />
            <div className="absolute -right-6 bottom-8 h-28 w-28 rounded-full bg-[#f2d19a]/40 blur-3xl" />
            <div className="paper-panel relative overflow-hidden p-8">
              <div className="absolute right-6 top-6 rounded-full border border-brand-100 bg-white/70 px-4 py-1 text-sm text-brand-700">
                さくら path
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {['Characters', 'Vocabulary', 'Grammar', 'Speaking'].map((item, idx) => (
                  <div key={item} className={`rounded-3xl border border-brand-100 p-5 ${idx % 2 === 0 ? 'bg-white/75' : 'bg-brand-50/90'}`}>
                    <p className="text-sm text-ink-700/60">Module</p>
                    <p className="mt-2 text-2xl font-bold text-ink-900">{item}</p>
                    <div className="mt-4 h-2 rounded-full bg-brand-100/80">
                      <div className={`h-full rounded-full ${idx % 2 === 0 ? 'bg-[#f2d19a]' : 'bg-brand-500'}`} style={{ width: `${(idx + 1) * 18}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-3xl border border-brand-100 bg-white/80 p-6">
                <p className="text-sm text-ink-700/60">Current goal</p>
                <p className="mt-2 text-2xl font-bold text-ink-900">Speak your first full conversation in 7 days</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-container py-16">
        <SectionHeading eyebrow="Core features" title="Everything a learner needs in one elegant studio" subtitle="Designed for a polished final-year project or startup MVP with calm visual hierarchy, warm colors, and Japanese-inspired surfaces." />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="card">
              <div className="inline-flex rounded-2xl bg-brand-50 p-3 text-brand-700">
                <Icon size={24} />
              </div>
              <h3 className="mt-5 text-xl font-bold text-ink-900">{title}</h3>
              <p className="mt-3 text-ink-700/75">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
