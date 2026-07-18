import Reveal from './Reveal'
import { Unlock, Users, Earth } from 'lucide-react'

const pillars = [
  {
    icon: Unlock,
    num: '01',
    title: 'Open by default',
    text: 'We promote models whose weights, code and research are published for everyone to inspect, run and improve — not locked behind corporate walls.',
  },
  {
    icon: Users,
    num: '02',
    title: 'Access as a right',
    text: 'Intelligence shouldn\u2019t be a subscription tier. We work toward a world where anyone, anywhere, can use world-class AI at zero cost.',
  },
  {
    icon: Earth,
    num: '03',
    title: 'Global by design',
    text: 'No single nation or company should own the future. We spotlight open models from every continent, in every language, for every community.',
  },
]

const stats = [
  { value: '40+', label: 'open-source models championed' },
  { value: '30+', label: 'countries represented' },
  { value: '100%', label: 'free to use, study & share' },
  { value: '$0', label: 'barrier to getting started' },
]

export default function Mission() {
  return (
    <section id="mission" className="bg-cream py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-crimson" />
            <span className="font-mono-alt text-xs font-medium uppercase tracking-[0.22em] text-crimson">
              The mission
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="font-display max-w-4xl text-4xl leading-[1.08] font-medium tracking-tight text-ink md:text-6xl">
            Intelligence is a commons —{' '}
            <em className="font-light italic text-ink-soft">it belongs to everyone.</em>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-ink-soft bg-[rgba(23,19,12,0.16)] md:mt-20 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.num} delay={i * 0.1} className="h-full">
              <div className="group flex h-full flex-col bg-cream p-8 transition-colors duration-500 hover:bg-cream-deep md:p-10">
                <div className="mb-10 flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-ink transition-colors duration-500 group-hover:border-crimson group-hover:bg-crimson group-hover:text-[#f6f1e7]">
                    <p.icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <span className="font-mono-alt text-sm text-ink-soft/60">{p.num}</span>
                </div>
                <h3 className="font-display text-2xl font-medium text-ink md:text-[1.7rem]">
                  {p.title}
                </h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-y-10 md:mt-24 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="border-l border-ink-soft pl-6">
                <div className="font-display text-5xl font-medium text-crimson md:text-6xl">
                  {s.value}
                </div>
                <div className="mt-2 max-w-[180px] text-sm leading-snug text-ink-soft">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
