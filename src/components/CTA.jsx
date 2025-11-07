export default function CTA() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-slate-950 text-white">
          <div aria-hidden className="pointer-events-none absolute -inset-1 bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-emerald-500/30 via-cyan-500/20 to-emerald-500/30 blur-2xl" />
          <div className="relative px-6 py-12 sm:px-10 sm:py-16 lg:p-20 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-emerald-300 ring-1 ring-inset ring-white/15">Verified marketplace</p>
              <h3 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">Bring your next big project to life</h3>
              <p className="mt-3 text-slate-300">Fixed-price packages, hourly engagements, and dedicated teams. Protected by escrow and milestone releases.</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#post" className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-slate-900 font-semibold shadow-sm hover:bg-slate-100">Post a job</a>
                <a href="#explore" className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 text-white font-semibold">Browse talent</a>
              </div>
            </div>
            <ul className="grid grid-cols-2 gap-4 text-sm">
              {[
                ['Payment protection', 'Milestones & escrow'],
                ['Top-rated talent', 'Vetted portfolios'],
                ['Secure messaging', 'NDAs & contracts'],
                ['Fast hiring', 'Start in 24 hours'],
              ].map(([title, desc]) => (
                <li key={title} className="rounded-2xl bg-white/5 p-4 ring-1 ring-inset ring-white/10">
                  <p className="font-semibold">{title}</p>
                  <p className="text-slate-300">{desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
