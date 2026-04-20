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
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-4 inline-flex rounded-full border border-brand-400/30 bg-brand-500/10 px-4 py-2 text-sm font-semibold text-brand-200">
              MERN + Tailwind Language Platform
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="max-w-3xl text-5xl font-bold tracking-tight text-white md:text-6xl">
              Learn any language from characters to real conversations.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Linguify helps learners move from script basics to listening, speaking, grammar, and scenario-based conversations with a clean and modern interface.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-8 flex flex-wrap gap-4">
              <Link to="/register" className="primary-btn">Start Learning</Link>
              <Link to="/learn" className="secondary-btn">View Modules</Link>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15 }} className="relative">
            <div className="absolute -left-8 top-8 h-24 w-24 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="absolute -right-6 bottom-8 h-28 w-28 rounded-full bg-violet-500/20 blur-3xl" />
            <div className="card relative overflow-hidden p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {['Characters', 'Vocabulary', 'Grammar', 'Speaking'].map((item, idx) => (
                  <div key={item} className={`rounded-3xl border border-white/10 p-5 ${idx % 2 === 0 ? 'bg-white/5' : 'bg-brand-500/10'}`}>
                    <p className="text-sm text-slate-400">Module</p>
                    <p className="mt-2 text-2xl font-bold text-white">{item}</p>
                    <div className="mt-4 h-2 rounded-full bg-white/10">
                      <div className={`h-full rounded-full ${idx % 2 === 0 ? 'bg-cyan-400' : 'bg-brand-500'}`} style={{ width: `${(idx + 1) * 18}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-3xl border border-white/10 bg-slate-950/60 p-6">
                <p className="text-sm text-slate-400">Current goal</p>
                <p className="mt-2 text-2xl font-bold text-white">Speak your first full conversation in 7 days</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-container py-16">
        <SectionHeading eyebrow="Core features" title="Everything a learner needs in one platform" subtitle="Designed for a polished final-year project or startup MVP with strong visual hierarchy and clean UX." />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="card">
              <div className="inline-flex rounded-2xl bg-brand-500/15 p-3 text-brand-300">
                <Icon size={24} />
              </div>
              <h3 className="mt-5 text-xl font-bold text-white">{title}</h3>
              <p className="mt-3 text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
