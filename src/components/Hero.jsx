import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative isolate">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 lg:pt-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/60 bg-emerald-50 px-3 py-1 text-emerald-700 text-xs font-semibold">
              New brand: Workly — modern classic
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
              Hire and get hired in a modern, classic marketplace
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              A refined platform for professionals and businesses. Discover top talent, apply to curated jobs, and grow your career with confidence.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#explore" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 px-6 py-3 text-white font-semibold shadow-lg shadow-emerald-500/20">
                Find Work
              </a>
              <a href="#post" className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-6 py-3 text-slate-800 font-semibold bg-white/70 hover:bg-white">
                Hire Talent
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-slate-600">
              <div>
                <span className="font-semibold text-slate-900">200K+</span> vetted freelancers
              </div>
              <div>
                <span className="font-semibold text-slate-900">50K+</span> companies
              </div>
            </div>
          </div>

          <div className="relative h-[420px] sm:h-[520px] lg:h-[580px] w-full rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-50 via-cyan-50 to-white shadow-xl ring-1 ring-emerald-100/60">
            <div className="absolute inset-0">
              <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-emerald-100/30" />
          </div>
        </div>
      </div>
    </section>
  )
}
