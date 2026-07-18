import { useState } from 'react'
import Reveal from './Reveal'
import { Code2, Server, Megaphone, Check } from 'lucide-react'

const paths = [
  {
    icon: Code2,
    title: 'Build with open models',
    text: 'Pick an open model, run it locally or in the cloud, and ship something the commons can be proud of.',
  },
  {
    icon: Server,
    title: 'Share your compute',
    text: 'Host community inference, contribute to open datasets, or help translate models into new languages.',
  },
  {
    icon: Megaphone,
    title: 'Spread the word',
    text: 'Teach a workshop, write about open AI, or simply show a friend that world-class AI can be free.',
  },
]

export default function Join() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  return (
    <section id="join" className="bg-cream py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-crimson" />
            <span className="font-mono-alt text-xs font-medium uppercase tracking-[0.22em] text-crimson">
              Get involved
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="font-display max-w-3xl text-4xl leading-[1.08] font-medium tracking-tight text-ink md:text-6xl">
            The revolution is{' '}
            <em className="font-light italic text-crimson">open source.</em> Join it.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:mt-20 md:grid-cols-3">
          {paths.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.09} className="h-full">
              <div className="h-full rounded-2xl border border-ink-soft bg-cream p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-crimson hover:shadow-[0_20px_50px_-24px_rgba(23,19,12,0.35)]">
                <span className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-crimson/10 text-crimson">
                  <p.icon className="h-5 w-5" strokeWidth={1.7} />
                </span>
                <h3 className="font-display text-xl font-medium text-ink md:text-2xl">
                  {p.title}
                </h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Newsletter */}
        <Reveal delay={0.1}>
          <div className="mt-16 rounded-3xl bg-ink p-8 text-[#f6f1e7] md:mt-24 md:p-14">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-md">
                <h3 className="font-display text-2xl font-medium md:text-3xl">
                  One email a month. Zero paywalls, forever.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#f6f1e7]/60">
                  New open models, community projects and self-hosting guides — from every
                  corner of the planet, straight to your inbox.
                </p>
              </div>
              {done ? (
                <div className="flex items-center gap-3 rounded-full border border-crimson bg-crimson/10 px-6 py-4">
                  <Check className="h-5 w-5 text-crimson" />
                  <span className="text-sm font-medium">
                    Welcome to the movement. See you in the commons.
                  </span>
                </div>
              ) : (
                <form
                  className="flex w-full max-w-md gap-3"
                  onSubmit={(e) => {
                    e.preventDefault()
                    if (email.trim()) setDone(true)
                  }}
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@everywhere.org"
                    className="w-full rounded-full border border-[#f6f1e7]/20 bg-transparent px-5 py-3.5 text-sm text-[#f6f1e7] placeholder:text-[#f6f1e7]/35 focus:border-crimson focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="shrink-0 rounded-full bg-crimson px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-[#f6f1e7] hover:text-ink"
                  >
                    Sign up
                  </button>
                </form>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
