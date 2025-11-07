import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Categories />
      <CTA />
      <footer className="border-t border-slate-200/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500" />
            <span className="font-semibold">Workly</span>
          </div>
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} Workly — A modern classic marketplace inspired by Upwork.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-slate-600 hover:text-slate-900">Privacy</a>
            <a href="#" className="text-slate-600 hover:text-slate-900">Terms</a>
            <a href="#" className="text-slate-600 hover:text-slate-900">Support</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
