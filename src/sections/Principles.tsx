import Reveal from './Reveal'

const principles = [
  {
    num: '01',
    title: 'Open weights, open books',
    text: 'If a model shapes public life, the public should be able to read it. We champion models that publish their weights, training methods and limitations.',
  },
  {
    num: '02',
    title: 'No gatekeepers',
    text: 'Access to intelligence should never depend on your income, your passport or your postcode. Free tiers aren\u2019t charity — access is a right.',
  },
  {
    num: '03',
    title: 'Privacy by default',
    text: 'Open models can run on your own hardware, under your own control. Your data stays yours — no harvesting, no surveillance, no fine print.',
  },
  {
    num: '04',
    title: 'Governed by community',
    text: 'We believe the direction of AI should be decided by the many, not the few — through open research, public debate and democratic oversight.',
  },
]

export default function Principles() {
  return (
    <section id="principles" className="bg-cream py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
          <div>
            <Reveal>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-crimson" />
                <span className="font-mono-alt text-xs font-medium uppercase tracking-[0.22em] text-crimson">
                  What we stand for
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display text-4xl leading-[1.08] font-medium tracking-tight text-ink md:text-6xl">
                Four principles,
                <br />
                <em className="font-light italic text-ink-soft">no compromises.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-8 max-w-md leading-relaxed text-ink-soft">
                Every project we back, every model we promote and every line of code we
                write answers to the same four tests. This is what &ldquo;AI for
                all&rdquo; means in practice.
              </p>
            </Reveal>
          </div>

          <div>
            {principles.map((p, i) => (
              <Reveal key={p.num} delay={i * 0.07}>
                <div className="group grid gap-3 border-t border-ink-soft py-8 transition-colors last:border-b hover:bg-cream-deep/60 sm:grid-cols-[80px_1fr] sm:gap-8 md:py-10">
                  <span className="font-mono-alt text-sm text-crimson">{p.num}</span>
                  <div>
                    <h3 className="font-display text-2xl font-medium text-ink transition-colors group-hover:text-crimson md:text-3xl">
                      {p.title}
                    </h3>
                    <p className="mt-3 max-w-xl leading-relaxed text-ink-soft">{p.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
