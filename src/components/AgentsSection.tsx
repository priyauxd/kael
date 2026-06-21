import { motion } from 'framer-motion'
import {
  ArrowRight, Mail, Phone, MessageCircle, Globe,
  PhoneCall, Headphones, Inbox, KeyRound,
  User, Monitor, Users,
} from 'lucide-react'

const agents = [
  {
    title: '24/7 Tier-1 Resolution',
    tags: ['Billing', 'Order status', 'Returns'],
    bullets: [
      'Resolves repetitive requests without waiting in a queue.',
      'Meets users in their channel of choice, day or night.',
      'Hands off to a human with full conversation context.',
    ],
  },
  {
    title: 'Outbound Sales & Lead Qualification',
    tags: ['SMS', 'Onboarding', 'Follow-up'],
    bullets: [
      'Qualifies inbound leads and books advisor calls.',
      'Follows up on stalled deals without manual chasing.',
      'Logs every touch straight back to your CRM.',
    ],
  },
  {
    title: 'VIP Escalation & Care',
    tags: ['Retention', 'Disputes', 'Loyalty'],
    bullets: [
      'Flags high-value customers for a human touch immediately.',
      'Routes sentiment and context to specialists, not operators.',
      'Tracks resolution time against your SLA in real time.',
    ],
  },
]

const identityFields = [
  { label: 'Mailbox', value: 'agent-042@kael.cx', icon: Mail },
  { label: 'Voice Line', value: 'Auto-provisioned SIP trunk', icon: Phone },
  { label: 'WhatsApp', value: 'Dedicated business number', icon: MessageCircle },
  { label: 'Systems', value: 'Zendesk · HubSpot · Shopify', icon: Globe },
]

const workstationItems = [
  { icon: PhoneCall, title: 'Makes & receives calls', desc: 'Calls customers, agents or colleagues from its own number' },
  { icon: Headphones, title: 'Talks to other agents', desc: 'Coordinates with human staff or other KAEL agents' },
  { icon: Inbox, title: 'Owns its inbox', desc: 'Reads, replies and threads emails autonomously' },
  { icon: KeyRound, title: 'Logs in to your systems', desc: 'CRM, ERP and tools — with its own secure credentials' },
]

const presenceChannels = [
  { name: 'Slack', desc: 'Tag @kael-042 in any channel', color: 'text-violet-600 dark:text-violet-400' },
  { name: 'WhatsApp', desc: 'Auto-assigned business number', color: 'text-emerald-600 dark:text-emerald-400' },
  { name: 'Telegram', desc: 'Provisioned bot handle', color: 'text-sky-600 dark:text-sky-400' },
  { name: 'Email', desc: 'CC agent-042@kael.cx on threads', color: 'text-amber-600 dark:text-amber-400' },
]

export default function AgentsSection() {
  return (
    <section id="agents" className="py-28 md:py-36">
      <div className="mx-auto max-w-5xl px-6">
        {/* Agent Foundation */}
        <div className="mb-28">
          <div className="text-center">
            <p className="text-[11px] font-medium tracking-[0.2em] text-violet-500 uppercase">
              Agent Foundation
            </p>
            <h2 className="mt-4 font-display text-[32px] font-bold leading-tight text-indigo-800 dark:text-white md:text-[40px]">
              A Real Colleague — Not Just a Bot
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-[1.7] text-slate-500 dark:text-slate-400">
              Each KAEL agent is a fully autonomous digital employee — with its own identity,
              dedicated tools and a permanent presence inside your organisation.
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {/* Identity Card */}
            <motion.div
              className="relative overflow-hidden rounded-3xl border-2 border-indigo-200 dark:border-indigo-500/30 bg-gradient-to-b from-indigo-50 to-white dark:from-indigo-500/5 dark:to-[#16142A] p-7"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-violet-500 shadow-lg shadow-indigo-500/20">
                  <User className="h-8 w-8 text-white" />
                </div>
                <h3 className="mt-4 font-display text-[17px] font-bold text-indigo-800 dark:text-white">
                  KAEL · Agent #042
                </h3>
                <p className="mt-0.5 text-[13px] font-medium text-violet-500 dark:text-violet-400">
                  Customer Experience Agent
                </p>
              </div>

              <div className="mx-auto my-5 h-px w-16 bg-indigo-200/60 dark:bg-indigo-500/20" />

              <div className="space-y-3">
                {identityFields.map(({ label, value, icon: Icon }) => (
                  <div key={label} className="flex items-center gap-3 text-[13px]">
                    <Icon className="h-3.5 w-3.5 shrink-0 text-slate-400" />
                    <span className="w-20 shrink-0 text-slate-400">{label}:</span>
                    <span className="font-medium text-indigo-800 dark:text-slate-200">{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Workstation Card */}
            <motion.div
              className="relative overflow-hidden rounded-3xl border-2 border-violet-200 dark:border-violet-500/30 bg-gradient-to-b from-violet-50 to-white dark:from-violet-500/5 dark:to-[#16142A] p-7"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="mb-5 flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 dark:bg-violet-500/15">
                  <Monitor className="h-6 w-6 text-violet-600 dark:text-violet-400" />
                </div>
                <h3 className="mt-4 font-display text-[17px] font-bold text-violet-700 dark:text-violet-300">
                  KAEL's Workstation
                </h3>
                <p className="mt-1 text-[13px] italic text-slate-400">
                  A dedicated desk — just like any colleague
                </p>
              </div>

              <div className="mx-auto mb-5 h-px w-16 bg-violet-200/60 dark:bg-violet-500/20" />

              <div className="space-y-4">
                {workstationItems.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-100/60 dark:bg-violet-500/10">
                      <Icon className="h-4 w-4 text-violet-500 dark:text-violet-400" />
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-indigo-800 dark:text-slate-200">{title}</p>
                      <p className="text-[12px] leading-snug text-slate-400">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Presence Card */}
            <motion.div
              className="relative overflow-hidden rounded-3xl border-2 border-sky-200 dark:border-sky-500/30 bg-gradient-to-b from-sky-50 to-white dark:from-sky-500/5 dark:to-[#16142A] p-7"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="mb-5 flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 dark:bg-sky-500/15">
                  <Users className="h-6 w-6 text-sky-600 dark:text-sky-400" />
                </div>
                <h3 className="mt-4 font-display text-[17px] font-bold text-sky-700 dark:text-sky-300">
                  Always Present, Always Reachable
                </h3>
              </div>

              <p className="mb-4 text-[13px] leading-relaxed text-slate-500 dark:text-slate-400">
                Talk to KAEL like a real colleague — it reads, replies and takes action across your team's tools:
              </p>

              <div className="mx-auto mb-4 h-px w-16 bg-sky-200/60 dark:bg-sky-500/20" />

              <div className="space-y-2.5">
                {presenceChannels.map(({ name, desc, color }) => (
                  <div key={name} className="flex items-center gap-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] px-4 py-2.5">
                    <span className={`w-20 shrink-0 text-[13px] font-semibold ${color}`}>{name}</span>
                    <span className="text-[12px] text-slate-500 dark:text-slate-400">{desc}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mission-based Agents */}
        <div className="text-center">
          <p className="text-[11px] font-medium tracking-[0.2em] text-slate-400 uppercase">
            Agents built for contact centers
          </p>
          <h2 className="mt-4 font-display text-[32px] font-bold leading-tight text-indigo-800 dark:text-white md:text-[40px]">
            Pick the mission, KAEL builds the agent
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {agents.map((agent, i) => (
            <motion.div
              key={agent.title}
              className="group rounded-3xl border border-slate-200/80 dark:border-slate-700/40 bg-white dark:bg-[#16142A] p-7 transition hover:border-violet-200 dark:hover:border-violet-500/30 hover:shadow-[0_4px_16px_rgba(30,27,75,0.06)] dark:hover:shadow-none"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <h3 className="font-display text-[17px] font-semibold text-indigo-800 dark:text-white">{agent.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {agent.tags.map(tag => (
                  <span key={tag} className="rounded-full bg-violet-50 dark:bg-violet-500/10 px-3.5 py-1 text-[12px] font-medium text-violet-600 dark:text-violet-400">
                    {tag}
                  </span>
                ))}
              </div>
              <ul className="mt-6 space-y-3">
                {agent.bullets.map(b => (
                  <li key={b} className="text-[14px] leading-[1.7] text-slate-500 dark:text-slate-400">{b}</li>
                ))}
              </ul>
              <a href="#" className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-medium text-violet-500 opacity-0 transition group-hover:opacity-100">
                Deploy this agent <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
