import KaelLogo from './KaelLogo'

const columns = [
  { title: 'Product', links: ['Platform', 'Agents', 'Mission Control', 'Pricing'] },
  { title: 'Company', links: ['About', 'Careers', 'Contact'] },
  { title: 'Legal', links: ['Privacy Policy', 'Terms'] },
]

export default function Footer() {
  return (
    <footer className="border-t border-indigo-800/40 bg-indigo-950 py-14">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <KaelLogo className="h-8" />
            <p className="mt-5 max-w-xs text-[14px] leading-[1.7] text-slate-500">
              Autonomous agents for contact centers —
              built for 24/7 CX with a clean handover to
              your team.
            </p>
          </div>

          {columns.map(col => (
            <div key={col.title}>
              <h4 className="text-[11px] font-medium tracking-[0.2em] text-slate-500 uppercase">{col.title}</h4>
              <ul className="mt-5 space-y-3">
                {col.links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-[14px] text-slate-500 transition hover:text-violet-300">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-indigo-800/40 pt-8 sm:flex-row">
          <p className="text-[13px] text-slate-600">&copy; {new Date().getFullYear()} KAEL. All rights reserved.</p>
          <p className="text-[13px] text-slate-600">Built for human-quality, autonomous CX.</p>
        </div>
      </div>
    </footer>
  )
}
