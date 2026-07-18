import { motion } from 'framer-motion'
import { ArrowDown, Globe2 } from 'lucide-react'

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
}

export default function Hero() {
  return (
    <section id="top" className="dot-grid relative overflow-hidden pt-36 pb-0 md:pt-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Eyebrow */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 flex items-center gap-3"
        >
          <span className="h-px w-10 bg-crimson" />
          <span className="font-mono-alt text-xs font-medium uppercase tracking-[0.22em] text-crimson">
            Open source · Community owned · For everyone
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display max-w-5xl text-[13vw] leading-[0.98] font-medium tracking-tight text-ink sm:text-7xl md:text-8xl lg:text-[7.5rem]"
        >
          AI for the <em className="font-light italic text-crimson">people</em>,
          <br />
          by the people<span className="text-crimson">.</span>
        </motion.h1>

        {/* Sub copy + CTA */}
        <div className="mt-10 flex flex-col gap-10 pb-20 md:mt-14 md:flex-row md:items-end md:justify-between md:pb-28">
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.85, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl"
          >
            Socialist AI is a movement to make artificial intelligence a public good —
            championing free, open-source models from every corner of the world, so the
            most powerful technology in history stays in the hands of all of us.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.85, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#models"
              className="group inline-flex items-center gap-2 rounded-full bg-crimson px-7 py-3.5 text-sm font-semibold text-[#f6f1e7] transition-all hover:bg-ink"
            >
              <Globe2 className="h-4 w-4 transition-transform duration-500 group-hover:rotate-180" />
              Explore open models
            </a>
            <a
              href="#manifesto"
              className="inline-flex items-center gap-2 rounded-full border border-ink px-7 py-3.5 text-sm font-semibold text-ink transition-all hover:bg-ink hover:text-[#f6f1e7]"
            >
              Read the manifesto
            </a>
          </motion.div>
        </div>
      </div>

      {/* Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="border-y border-ink bg-ink py-4"
      >
        <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center gap-10" aria-hidden={dup === 1}>
              {[
                'Mistral · France',
                'DeepSeek · China',
                'Llama · USA',
                'Qwen · China',
                'Falcon · UAE',
                'Sarvam · India',
                'BLOOM · Global',
                'Apertus · Switzerland',
                'OLMo · USA',
                'Latam-GPT · Latin America',
              ].map((m) => (
                <span
                  key={m}
                  className="flex items-center gap-10 font-mono-alt text-sm uppercase tracking-[0.18em] text-[#f6f1e7]/80"
                >
                  {m}
                  <span className="text-crimson">★</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </motion.div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block">
        <ArrowDown className="h-5 w-5 animate-bounce text-[#f6f1e7]/0" />
      </div>
    </section>
  )
}
