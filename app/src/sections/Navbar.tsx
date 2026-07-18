import { useEffect, useState } from 'react'
import { Menu, X, Star } from 'lucide-react'

const links = [
  { label: 'Mission', href: '#mission' },
  { label: 'Models', href: '#models' },
  { label: 'Principles', href: '#principles' },
  { label: 'Manifesto', href: '#manifesto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? 'bg-cream/90 backdrop-blur-md border-b border-ink-soft' : ''
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-crimson transition-transform duration-500 group-hover:rotate-[72deg]">
            <Star className="h-4.5 w-4.5 fill-[#f6f1e7] text-[#f6f1e7]" strokeWidth={0} />
          </span>
          <span className="font-display text-xl font-semibold tracking-tight text-ink">
            Socialist&nbsp;AI
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-crimson"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#join"
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-[#f6f1e7] transition-all hover:bg-crimson"
          >
            Join the movement
          </a>
        </div>

        <button
          className="text-ink md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink-soft bg-cream px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-2xl font-medium text-ink"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#join"
              onClick={() => setOpen(false)}
              className="mt-2 inline-block w-fit rounded-full bg-crimson px-6 py-3 text-sm font-semibold text-[#f6f1e7]"
            >
              Join the movement
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
