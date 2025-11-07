const categories = [
  { name: 'Design & Creative', color: 'from-rose-500 to-pink-500' },
  { name: 'Development & IT', color: 'from-emerald-500 to-cyan-500' },
  { name: 'Marketing & Sales', color: 'from-amber-500 to-orange-500' },
  { name: 'Writing & Translation', color: 'from-indigo-500 to-blue-500' },
  { name: 'Finance & Accounting', color: 'from-teal-500 to-emerald-500' },
  { name: 'Admin & Support', color: 'from-violet-500 to-fuchsia-500' },
]

export default function Categories() {
  return (
    <section id="explore" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Explore categories</h2>
            <p className="text-slate-600 mt-1">Hand-picked areas for a focused job hunt</p>
          </div>
          <a href="#" className="hidden sm:inline-flex text-emerald-700 font-semibold">View all</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((c) => (
            <div key={c.name} className="group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${c.color} shadow-inner`} />
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{c.name}</h3>
              <p className="mt-1 text-sm text-slate-600">Top roles, verified clients, modern budgets.</p>
              <div className="mt-6 inline-flex items-center text-emerald-700 font-semibold">Browse jobs →</div>
              <div className="pointer-events-none absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-gradient-to-br from-emerald-100/40 to-cyan-100/30 blur-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
