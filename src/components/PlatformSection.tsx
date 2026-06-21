import { motion } from 'framer-motion'
import { Zap, Users, BarChart3 } from 'lucide-react'

const layers = [
  {
    icon: Zap,
    title: 'AI Automation Layer',
    desc: 'Monitors tier-1 queries, data collection and booking 24/7 with zero fatigue, and enforces the same structured workflow on every interaction.',
    color: 'text-violet-500',
    bg: 'bg-violet-50 dark:bg-violet-500/10',
  },
  {
    icon: Users,
    title: 'Human Handover Engine',
    desc: 'Threshold triggers route complex disputes and high-value renewals to a specialist, with full context, sentiment and smart queue priority reports.',
    color: 'text-sky-500',
    bg: 'bg-sky-50 dark:bg-sky-500/10',
  },
  {
    icon: BarChart3,
    title: 'Dashboard & Guardian',
    desc: 'Live CSAT, FCR, AHT and SLA tracking with guardrail audits and full logs, so managers see what KAEL is doing before they have to ask.',
    color: 'text-indigo-500 dark:text-indigo-400',
    bg: 'bg-indigo-50 dark:bg-indigo-500/10',
  },
]

export default function PlatformSection() {
  return (
    <section id="platform" className="py-28 md:py-36">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="text-[11px] font-medium tracking-[0.2em] text-slate-400 uppercase">Mission Control</p>
          <h2 className="mt-4 font-display text-[32px] font-bold leading-tight text-indigo-800 dark:text-white md:text-[40px]">
            One platform, two layers<br className="hidden sm:block" /> of intelligence
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[17px] leading-[1.7] text-slate-500 dark:text-slate-400">
            KAEL pairs always-on automation with a clean handover to your team — so
            nothing falls through, and nothing needlessly waits for a human.
          </p>
        </div>

        <div className="mt-20 grid gap-12 md:grid-cols-3">
          {layers.map((layer, i) => (
            <motion.div
              key={layer.title}
              className="text-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className={`mx-auto inline-flex rounded-2xl ${layer.bg} p-4`}>
                <layer.icon size={26} className={layer.color} />
              </div>
              <h3 className="mt-6 font-display text-lg font-semibold text-indigo-800 dark:text-white">{layer.title}</h3>
              <p className="mt-3 text-[15px] leading-[1.7] text-slate-500 dark:text-slate-400">{layer.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
