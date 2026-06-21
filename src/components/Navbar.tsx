import { useState } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { Link } from 'react-router-dom'
import KaelLogo from './KaelLogo'
import { useTheme } from '../hooks/useTheme'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { theme, toggle } = useTheme()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-[#0F0E1A] shadow-[0_1px_0_rgba(0,0,0,0.06)] dark:shadow-[0_1px_0_rgba(255,255,255,0.04)]">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-6">
        <a href="/" className="flex items-center">
          <KaelLogo className="h-10" />
        </a>

        <div className="hidden items-center gap-10 md:flex">
          {['Platform', 'Agents', 'Mission Control', 'Pricing'].map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/ /g, '-')}`}
              className="text-[15px] text-slate-600 dark:text-slate-400 transition hover:text-indigo-800 dark:hover:text-white"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-5 md:flex">
          <button
            onClick={toggle}
            className="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 dark:text-slate-400 transition hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-700 dark:hover:text-slate-200"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a href="#" className="text-[15px] text-slate-600 dark:text-slate-400 transition hover:text-indigo-800 dark:hover:text-white">
            Log In
          </a>
          <Link to="/onboarding" className="rounded-full bg-violet-500 px-6 py-2.5 text-[15px] font-medium text-white transition hover:bg-violet-600">
            Get Started
          </Link>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggle}
            className="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 dark:text-slate-400 transition hover:bg-slate-100 dark:hover:bg-white/5"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setOpen(!open)} className="text-slate-600 dark:text-slate-400" aria-label="Menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-[#0F0E1A] px-6 pb-6 md:hidden">
          <div className="flex flex-col gap-5 pt-5">
            {['Platform', 'Agents', 'Mission Control', 'Pricing'].map(link => (
              <a key={link} href={`#${link.toLowerCase().replace(/ /g, '-')}`} onClick={() => setOpen(false)} className="text-[15px] text-slate-600 dark:text-slate-400">{link}</a>
            ))}
            <div className="flex items-center gap-5 pt-3">
              <a href="#" className="text-[15px] text-slate-600 dark:text-slate-400">Log In</a>
              <a href="#" className="rounded-full bg-violet-500 px-6 py-2.5 text-[15px] font-medium text-white">Get Started</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
