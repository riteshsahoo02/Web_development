export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="max-w-3xl">
      {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-brand-300">{eyebrow}</p>}
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base text-slate-300 md:text-lg">{subtitle}</p>}
    </div>
  )
}
