import { useEffect } from 'react'
import { Routes, Route } from 'react-router'
import Home from './pages/Home'

const navbarOffset = 96

function scrollToHash(hash: string) {
  if (!hash) return

  const element = document.getElementById(hash)
  if (!element) return

  const top = element.getBoundingClientRect().top + window.scrollY - navbarOffset
  window.scrollTo({ top, behavior: 'smooth' })
}

export default function App() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target : null
      const link = target?.closest('a[href]')
      if (!link) return

      const href = link.getAttribute('href')
      if (!href?.startsWith('#') || href === '#') return

      const id = href.slice(1)
      const element = document.getElementById(id)
      if (!element) return

      event.preventDefault()
      window.history.pushState(null, '', href)
      scrollToHash(id)
    }

    const handleHashChange = () => scrollToHash(window.location.hash.slice(1))

    document.addEventListener('click', handleClick)
    window.addEventListener('hashchange', handleHashChange)

    if (window.location.hash) {
      requestAnimationFrame(() => scrollToHash(window.location.hash.slice(1)))
    }

    return () => {
      document.removeEventListener('click', handleClick)
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}
