import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const checks = [
  'No block diagrams or decision trees to maintain',
  'No hiring cycles — scale up or down in minutes',
  'No silo between the bot and your floor — one shared queue',
]

const steps = [
  {
    num: '1',
    title: 'Write the brief',
    desc: 'Describe the team you need in a sentence, the way you\'d brief a new hire.',
  },
  {
    num: '2',
    title: 'KAEL scaffolds the agent',
    desc: 'Intents, tools, CRM screens and escalation rules are generated automatically.',
  },
  {
    num: '3',
    title: 'Review & deploy',
    desc: 'Approve the guardrails, then ship across voice, chat, email and WhatsApp.',
  },
]

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-28 md:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[11px] font-medium tracking-[0.2em] text-violet-500 uppercase">
              From brief to live agent
            </p>
            <h2 className="mt-4 font-display text-[32px] font-bold leading-tight text-indigo-800 dark:text-white md:text-[40px]">
              No workflow builders.<br />No brittle scripts.
            </h2>
            <p className="mt-5 text-[17px] leading-[1.7] text-slate-500 dark:text-slate-400">
              Write the brief in plain language. Kael scaffolds the agent, its tools,
              and its guardrails — ready for your team to review before it goes live.
            </p>
            <ul className="mt-8 space-y-4">
              {checks.map(c => (
                <li key={c} className="flex items-start gap-3 text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
                  <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-violet-50 dark:bg-violet-500/10">
                    <Check size={12} className="text-violet-500" />
                  </div>
                  {c}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-800 to-indigo-900 p-10"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="space-y-2">
              {steps.map((step, i) => (
                <div key={step.num} className="rounded-2xl p-5 transition hover:bg-white/[0.03]">
                  <div className="flex gap-5">
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-violet-500/15 text-sm font-bold text-violet-300">
                      {step.num}
                    </div>
                    <div>
                      <h4 className="text-[15px] font-semibold text-white">{step.title}</h4>
                      <p className="mt-1.5 text-[14px] leading-relaxed text-slate-400">{step.desc}</p>
                    </div>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="ml-[18px] mt-4 h-5 border-l border-dashed border-indigo-700/50" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
