import Reveal from './Reveal'
import { Star } from 'lucide-react'

export default function Manifesto() {
  return (
    <section id="manifesto" className="bg-crimson py-24 text-[#f6f1e7] md:py-36">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
        <Reveal>
          <Star className="mx-auto mb-10 h-8 w-8 fill-[#f6f1e7] text-[#f6f1e7]" strokeWidth={0} />
        </Reveal>
        <Reveal delay={0.1}>
          <blockquote className="font-display text-4xl leading-[1.15] font-medium tracking-tight md:text-6xl lg:text-[4.2rem]">
            &ldquo;The means of prediction belong in the hands of the{' '}
            <em className="font-light italic">many</em> — not locked in the data centers
            of the few.&rdquo;
          </blockquote>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-10 font-mono-alt text-xs uppercase tracking-[0.24em] text-[#f6f1e7]/70">
            — The Socialist AI Manifesto, Article One
          </p>
        </Reveal>
      </div>
    </section>
  )
}
