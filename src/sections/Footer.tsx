import { Star, Github, Globe2, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-[#f6f1e7]/10 bg-ink py-14 text-[#f6f1e7]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-crimson">
                <Star className="h-4.5 w-4.5 fill-[#f6f1e7] text-[#f6f1e7]" strokeWidth={0} />
              </span>
              <span className="font-display text-xl font-semibold tracking-tight">
                Socialist&nbsp;AI
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-[#f6f1e7]/55">
              Making artificial intelligence a public good — open source, globally
              built, and free for all. From each model according to its weights, to each
              person according to their needs.
            </p>
          </div>

          <div className="flex gap-20">
            <div>
              <p className="font-mono-alt mb-4 text-xs uppercase tracking-[0.2em] text-[#f6f1e7]/40">
                Explore
              </p>
              <ul className="space-y-2.5 text-sm">
                <li><a href="#mission" className="text-[#f6f1e7]/70 transition-colors hover:text-crimson">Mission</a></li>
                <li><a href="#models" className="text-[#f6f1e7]/70 transition-colors hover:text-crimson">Models</a></li>
                <li><a href="#principles" className="text-[#f6f1e7]/70 transition-colors hover:text-crimson">Principles</a></li>
                <li><a href="#manifesto" className="text-[#f6f1e7]/70 transition-colors hover:text-crimson">Manifesto</a></li>
              </ul>
            </div>
            <div>
              <p className="font-mono-alt mb-4 text-xs uppercase tracking-[0.2em] text-[#f6f1e7]/40">
                Connect
              </p>
              <div className="flex gap-3">
                <a href="#" aria-label="GitHub" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#f6f1e7]/15 transition-colors hover:border-crimson hover:text-crimson">
                  <Github className="h-4 w-4" />
                </a>
                <a href="#" aria-label="Web" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#f6f1e7]/15 transition-colors hover:border-crimson hover:text-crimson">
                  <Globe2 className="h-4 w-4" />
                </a>
                <a href="mailto:admin@socialist-tch.org" aria-label="Email" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#f6f1e7]/15 transition-colors hover:border-crimson hover:text-crimson">
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[#f6f1e7]/10 pt-6 text-xs text-[#f6f1e7]/40 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Socialist AI — a community project for the commons.</span>
          <div className="flex flex-wrap items-center gap-4">
            <a href="/impressum.html" className="transition-colors hover:text-crimson">
              Impressum
            </a>
            <a href="/termsandconditions.html" className="transition-colors hover:text-crimson">
              Terms & Conditions
            </a>
            <span className="font-mono-alt uppercase tracking-[0.18em]">
              Open source · Open weights · Open world ★
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
