import Reveal from './Reveal'
import { ArrowUpRight } from 'lucide-react'

const models = [
  {
    flag: '🇫🇷',
    name: 'Mistral',
    origin: 'France',
    license: 'Apache 2.0',
    blurb: 'Lean, efficient European models that punch far above their weight.',
  },
  {
    flag: '🇨🇳',
    name: 'DeepSeek',
    origin: 'China',
    license: 'MIT',
    blurb: 'Frontier-grade reasoning, released openly for the whole world to build on.',
  },
  {
    flag: '🇺🇸',
    name: 'Llama',
    origin: 'United States',
    license: 'Community License',
    blurb: 'The family that made capable open models a household reality.',
  },
  {
    flag: '🇨🇳',
    name: 'Qwen',
    origin: 'China',
    license: 'Apache 2.0',
    blurb: 'Multilingual strength across dozens of languages and modalities.',
  },
  {
    flag: '🇦🇪',
    name: 'Falcon',
    origin: 'United Arab Emirates',
    license: 'Apache 2.0',
    blurb: 'The Gulf\u2019s flagship contribution to the open-weight ecosystem.',
  },
  {
    flag: '🇮🇳',
    name: 'Sarvam',
    origin: 'India',
    license: 'Open weights',
    blurb: 'Built for India\u2019s languages — AI that speaks to a billion people.',
  },
  {
    flag: '🇨🇭',
    name: 'Apertus',
    origin: 'Switzerland',
    license: 'Apache 2.0',
    blurb: 'A fully transparent public model from Switzerland\u2019s research institutions.',
  },
  {
    flag: '🌎',
    name: 'Latam-GPT',
    origin: 'Latin America',
    license: 'Open project',
    blurb: 'A continent-wide effort to give Latin America its own open model.',
  },
]

export default function Models() {
  return (
    <section id="models" className="bg-ink py-24 text-[#f6f1e7] md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-crimson" />
            <span className="font-mono-alt text-xs font-medium uppercase tracking-[0.22em] text-crimson">
              The global stack
            </span>
          </div>
        </Reveal>

        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal delay={0.08}>
            <h2 className="font-display max-w-2xl text-4xl leading-[1.08] font-medium tracking-tight md:text-6xl">
              Open models, from{' '}
              <em className="font-light italic text-[#f6f1e7]/70">all over the world.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="max-w-sm leading-relaxed text-[#f6f1e7]/60">
              The future of AI is being written in Paris, Beijing, Bangalore, Abu Dhabi
              and São Paulo — in the open. These are the people&rsquo;s models.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 md:mt-20 lg:grid-cols-4">
          {models.map((m, i) => (
            <Reveal key={m.name} delay={(i % 4) * 0.07} className="h-full">
              <a
                href="#join"
                className="group flex h-full flex-col rounded-2xl border border-[#f6f1e7]/12 bg-[#f6f1e7]/[0.03] p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-crimson hover:bg-[#f6f1e7]/[0.06]"
              >
                <div className="mb-8 flex items-start justify-between">
                  <span className="text-3xl">{m.flag}</span>
                  <ArrowUpRight className="h-4 w-4 text-[#f6f1e7]/30 transition-all duration-300 group-hover:text-crimson" />
                </div>
                <h3 className="font-display text-2xl font-medium">{m.name}</h3>
                <p className="mt-1 font-mono-alt text-[11px] uppercase tracking-[0.18em] text-[#f6f1e7]/45">
                  {m.origin} · {m.license}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[#f6f1e7]/65">{m.blurb}</p>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-12 text-center font-mono-alt text-xs uppercase tracking-[0.2em] text-[#f6f1e7]/40">
            + BLOOM, OLMo, Kimi, GLM, Yi, Gemma and hundreds more — one ecosystem, zero gatekeepers
          </p>
        </Reveal>
      </div>
    </section>
  )
}
