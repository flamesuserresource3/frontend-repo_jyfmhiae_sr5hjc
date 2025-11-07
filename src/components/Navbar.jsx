import { useState } from 'react'
import { Menu, X, Search, User } from 'lucide-react'

const navItems = [
  { label: 'Find Work', href: '#' },
  { label: 'Find Talent', href: '#' },
  { label: 'Why Us', href: '#' },
  { label: 'Enterprise', href: '#' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 shadow-inner" />
            <span className="text-xl font-semibold tracking-tight text-slate-900">Workly</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search jobs, talent..."
                className="w-64 rounded-xl border border-slate-200 bg-white/70 py-2 pl-10 pr-3 text-sm text-slate-700 placeholder-slate-400 shadow-sm focus:ring-2 focus:ring-emerald-400 focus:outline-none"
              />
            </div>
            <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 focus:outline-none">
              <User className="h-4 w-4" /> Sign in
            </button>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 hover:bg-slate-100"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-3">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <button className="flex-1 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20">Sign in</button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
