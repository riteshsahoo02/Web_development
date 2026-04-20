export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="max-w-3xl">
      {eyebrow && <p className="kicker mb-4">{eyebrow}</p>}
      <h2 className="text-3xl font-bold tracking-tight text-ink-900 md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base text-ink-700/80 md:text-lg">{subtitle}</p>}
    </div>
  )
}
