import { motion } from 'framer-motion'

export default function MissionControlSection() {
  return (
    <section id="mission-control" className="bg-slate-50 dark:bg-[#13112E] py-28 md:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="text-[11px] font-medium tracking-[0.2em] text-slate-400 uppercase">See it working</p>
          <h2 className="mt-4 font-display text-[32px] font-bold leading-tight text-indigo-800 dark:text-white md:text-[40px]">
            Inside KAEL Mission Control
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[17px] leading-[1.7] text-slate-500 dark:text-slate-400">
            Every agent, every handover and every metric in one live console.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            className="rounded-3xl bg-white dark:bg-[#16142A] p-7 shadow-[0_1px_3px_rgba(0,0,0,0.04)] dark:shadow-none dark:border dark:border-slate-700/40"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center gap-2 text-[11px] font-medium tracking-wider text-slate-400 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-success" />
              Mission Control / Agents
            </div>
            <div className="mt-6 flex gap-3">
              {[
                { label: 'In Progress', value: 12, active: true },
                { label: 'On Hold', value: 4, active: false },
                { label: 'To Review', value: 3, active: false },
              ].map(item => (
                <div key={item.label} className="flex-1 text-center">
                  <div className={`rounded-2xl py-5 text-lg font-bold ${
                    item.active ? 'bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400' : 'bg-slate-50 dark:bg-white/5 text-slate-400'
                  }`}>
                    {item.value}
                  </div>
                  <p className="mt-2.5 text-[11px] text-slate-400">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="rounded-3xl bg-white dark:bg-[#16142A] p-7 shadow-[0_1px_3px_rgba(0,0,0,0.04)] dark:shadow-none dark:border dark:border-slate-700/40"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="flex items-center gap-2 text-[11px] font-medium tracking-wider text-slate-400 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              Agent / Identity
            </div>
            <div className="mt-6 flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500 text-xl font-bold text-white">
                K
              </div>
              <p className="mt-4 text-[15px] font-semibold text-indigo-800 dark:text-white">KAEL · Agent #042</p>
              <p className="mt-0.5 text-[13px] text-slate-400">Customer Experience Agent</p>
              <div className="mt-5 w-full space-y-3 rounded-2xl bg-slate-50 dark:bg-white/5 p-4">
                <div className="flex justify-between text-[13px]">
                  <span className="text-slate-400">Channels</span>
                  <span className="font-medium text-indigo-800 dark:text-slate-200">WhatsApp, Voice</span>
                </div>
                <div className="border-t border-slate-100 dark:border-slate-700/40" />
                <div className="flex justify-between text-[13px]">
                  <span className="text-slate-400">CSAT</span>
                  <span className="font-medium text-success">Excellent</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="rounded-3xl bg-white dark:bg-[#16142A] p-7 shadow-[0_1px_3px_rgba(0,0,0,0.04)] dark:shadow-none dark:border dark:border-slate-700/40"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 text-[11px] font-medium tracking-wider text-slate-400 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-success" />
              Dashboard / Live
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { value: '94%', label: 'CSAT', color: 'text-violet-600 dark:text-violet-400' },
                { value: '81%', label: 'FCR', color: 'text-sky-500 dark:text-sky-400' },
                { value: '12%', label: 'Escalation', color: 'text-indigo-500 dark:text-indigo-400' },
              ].map(stat => (
                <div key={stat.label} className="text-center">
                  <div className={`text-xl font-bold ${stat.color}`}>{stat.value}</div>
                  <p className="mt-1 text-[11px] text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex h-20 items-end justify-between gap-1 rounded-2xl bg-slate-50 dark:bg-white/5 px-3 pb-3 pt-2">
              {[35, 55, 45, 65, 50, 72, 60, 80, 68, 85, 72, 78, 88, 75, 82].map((h, i) => (
                <div
                  key={i}
                  className="w-full rounded-sm bg-violet-300 dark:bg-violet-500/40 opacity-50 transition hover:opacity-80"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
