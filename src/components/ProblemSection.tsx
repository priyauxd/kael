import { motion } from 'framer-motion'
import { Phone, Settings, BarChart3, Users, Headphones, Database } from 'lucide-react'

const problems = [
  {
    icon: Phone,
    title: 'Agents overwhelmed',
    desc: 'Repetitive low-value queries consume 60–70% of agent time — leaving no bandwidth for complex or high-value cases.',
    border: 'border-violet-300 dark:border-violet-500/40',
    iconBg: 'bg-violet-100 dark:bg-violet-500/15',
    iconColor: 'text-violet-600 dark:text-violet-400',
    titleColor: 'text-violet-700 dark:text-violet-400',
  },
  {
    icon: Settings,
    title: 'No consistent process',
    desc: 'Without automated workflows, every agent handles requests differently — causing inconsistent CX, errors and compliance gaps.',
    border: 'border-slate-300 dark:border-slate-600',
    iconBg: 'bg-slate-100 dark:bg-white/5',
    iconColor: 'text-slate-500 dark:text-slate-400',
    titleColor: 'text-violet-700 dark:text-violet-400',
  },
  {
    icon: BarChart3,
    title: 'Zero visibility',
    desc: 'Managers lack real-time data on performance, SLA adherence or customer sentiment — decisions are reactive, not proactive.',
    border: 'border-sky-300 dark:border-sky-500/40',
    iconBg: 'bg-sky-100 dark:bg-sky-500/15',
    iconColor: 'text-sky-600 dark:text-sky-400',
    titleColor: 'text-sky-700 dark:text-sky-400',
  },
  {
    icon: Users,
    title: 'High cost & attrition',
    desc: 'Manual operations scale poorly. Hiring, training and retaining agents is expensive — churn is among the highest of any industry.',
    border: 'border-violet-300 dark:border-violet-500/40',
    iconBg: 'bg-violet-100 dark:bg-violet-500/15',
    iconColor: 'text-violet-600 dark:text-violet-400',
    titleColor: 'text-violet-700 dark:text-violet-400',
  },
  {
    icon: Headphones,
    title: '24/7 coverage impossible',
    desc: 'Human teams cannot operate around the clock at scale. After-hours contacts go unanswered or routed to costly outsourced services.',
    border: 'border-violet-300 dark:border-violet-500/40',
    iconBg: 'bg-violet-100 dark:bg-violet-500/15',
    iconColor: 'text-violet-600 dark:text-violet-400',
    titleColor: 'text-violet-700 dark:text-violet-400',
  },
  {
    icon: Database,
    title: 'Siloed data & systems',
    desc: "CRMs, ticketing tools and communication platforms don't talk to each other — agents waste time switching context and copy-pasting.",
    border: 'border-sky-300 dark:border-sky-500/40',
    iconBg: 'bg-sky-100 dark:bg-sky-500/15',
    iconColor: 'text-sky-600 dark:text-sky-400',
    titleColor: 'text-sky-700 dark:text-sky-400',
  },
]

export default function ProblemSection() {
  return (
    <section className="py-28 md:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[11px] font-medium tracking-[0.2em] text-red-500 dark:text-red-400 uppercase">
            The Problem
          </p>
          <h2 className="mt-4 font-display text-[32px] font-bold leading-tight text-indigo-800 dark:text-white md:text-[40px]">
            Contact Centers Today Are Broken
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-[1.7] text-slate-500 dark:text-slate-400">
            Manual processes, siloed tools and rising costs leave teams firefighting instead of
            delivering the experience customers expect.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              className={`group relative overflow-hidden rounded-2xl border-2 ${p.border} bg-white dark:bg-[#16142A] p-6 transition-all hover:shadow-lg dark:hover:shadow-none hover:-translate-y-0.5`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <div className={`mb-4 inline-flex rounded-xl ${p.iconBg} p-3`}>
                <p.icon className={`h-6 w-6 ${p.iconColor}`} />
              </div>
              <h3 className={`mb-2 font-display text-[17px] font-bold ${p.titleColor}`}>
                {p.title}
              </h3>
              <p className="text-[14px] leading-[1.7] text-slate-500 dark:text-slate-400">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
