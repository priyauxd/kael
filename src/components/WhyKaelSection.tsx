import { motion } from 'framer-motion'
import { Bot, Users, CheckCircle2 } from 'lucide-react'

const aiPoints = [
  {
    title: 'Eliminates repetitive workload',
    desc: 'Handles tier-1 queries, data collection and bookings 24/7 with zero fatigue.',
  },
  {
    title: 'Enforces consistent processes',
    desc: 'Every interaction follows the same structured workflow — no gaps, no errors.',
  },
  {
    title: 'Real-time CX metrics',
    desc: 'Live dashboards track CSAT, FCR, AHT and SLA adherence automatically.',
  },
  {
    title: 'Scales instantly, costs less',
    desc: 'No hiring cycles — spin up agents in minutes and scale to demand.',
  },
]

const humanPoints = [
  {
    title: 'Handles what AI cannot',
    desc: 'Complex disputes, emotional conversations and high-value negotiations stay human.',
  },
  {
    title: 'Context-aware handover',
    desc: 'Full conversation history, sentiment and intent are passed to the specialist instantly.',
  },
  {
    title: 'Builds trust & relationships',
    desc: 'High-value customers receive the human attention that drives loyalty and retention.',
  },
  {
    title: 'Keeps agents focused',
    desc: 'Agents only receive cases where their expertise creates real value — reducing burnout.',
  },
]

export default function WhyKaelSection() {
  return (
    <section className="bg-slate-50 dark:bg-[#13112E] py-28 md:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[11px] font-medium tracking-[0.2em] text-violet-500 uppercase">
            Why KAEL
          </p>
          <h2 className="mt-4 font-display text-[32px] font-bold leading-tight text-indigo-800 dark:text-white md:text-[40px]">
            The Answer to a Broken Model
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-[1.7] text-slate-500 dark:text-slate-400">
            KAEL is an autonomous contact center platform that replaces manual, fragmented operations
            with a structured AI-first team — solving the exact pain points contact centers face today.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <motion.div
            className="overflow-hidden rounded-3xl border-2 border-violet-300 dark:border-violet-500/40 bg-white dark:bg-[#16142A] p-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 dark:bg-violet-500/15">
                <Bot className="h-6 w-6 text-violet-600 dark:text-violet-400" />
              </div>
              <h3 className="font-display text-xl font-bold text-violet-700 dark:text-violet-400">
                AI Automation Layer
              </h3>
            </div>
            <div className="space-y-5">
              {aiPoints.map((p, i) => (
                <motion.div
                  key={p.title}
                  className="flex gap-3"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.15 + i * 0.08 }}
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-violet-500 dark:text-violet-400" />
                  <div>
                    <p className="text-[15px] font-semibold text-indigo-800 dark:text-white">{p.title}</p>
                    <p className="mt-0.5 text-[14px] leading-[1.7] text-slate-500 dark:text-slate-400">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="overflow-hidden rounded-3xl border-2 border-sky-300 dark:border-sky-500/40 bg-white dark:bg-[#16142A] p-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 dark:bg-sky-500/15">
                <Users className="h-6 w-6 text-sky-600 dark:text-sky-400" />
              </div>
              <h3 className="font-display text-xl font-bold text-sky-700 dark:text-sky-400">
                Human Intelligence Layer
              </h3>
            </div>
            <div className="space-y-5">
              {humanPoints.map((p, i) => (
                <motion.div
                  key={p.title}
                  className="flex gap-3"
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.15 + i * 0.08 }}
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sky-500 dark:text-sky-400" />
                  <div>
                    <p className="text-[15px] font-semibold text-indigo-800 dark:text-white">{p.title}</p>
                    <p className="mt-0.5 text-[14px] leading-[1.7] text-slate-500 dark:text-slate-400">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
