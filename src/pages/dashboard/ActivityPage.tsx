import { motion } from 'framer-motion'
import { Bot, MessageSquare, AlertTriangle, CheckCircle2, ArrowUpRight, UserCheck } from 'lucide-react'

interface ActivityItem {
  id: string
  icon: typeof Bot
  iconColor: string
  title: string
  description: string
  time: string
  agent: string
}

const activities: ActivityItem[] = [
  { id: '1', icon: CheckCircle2, iconColor: 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400', title: 'Conversation resolved', description: 'Billing inquiry — customer asked about refund policy for subscription cancellation.', time: '2 min ago', agent: 'Tier-1 Resolution' },
  { id: '2', icon: ArrowUpRight, iconColor: 'bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400', title: 'Lead qualified', description: 'New lead from website form — enterprise plan interest, demo booked for Thursday.', time: '5 min ago', agent: 'Outbound Sales' },
  { id: '3', icon: AlertTriangle, iconColor: 'bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400', title: 'Escalated to human', description: 'VIP customer with order dispute — routed to specialist with full conversation context.', time: '8 min ago', agent: 'VIP Escalation' },
  { id: '4', icon: MessageSquare, iconColor: 'bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400', title: 'New conversation', description: 'WhatsApp message — customer asking about delivery tracking for order #4821.', time: '12 min ago', agent: 'Tier-1 Resolution' },
  { id: '5', icon: CheckCircle2, iconColor: 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400', title: 'Conversation resolved', description: 'Password reset assistance — guided customer through the recovery flow.', time: '15 min ago', agent: 'Tier-1 Resolution' },
  { id: '6', icon: UserCheck, iconColor: 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400', title: 'Handover complete', description: 'Customer requested live agent — transferred to available team member with context summary.', time: '22 min ago', agent: 'Tier-1 Resolution' },
  { id: '7', icon: ArrowUpRight, iconColor: 'bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400', title: 'Follow-up sent', description: 'Automated follow-up email sent to stalled deal — proposal review reminder.', time: '35 min ago', agent: 'Outbound Sales' },
  { id: '8', icon: Bot, iconColor: 'bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400', title: 'Agent updated', description: 'Knowledge base refreshed with 12 new FAQ entries from recent conversations.', time: '1h ago', agent: 'Tier-1 Resolution' },
  { id: '9', icon: CheckCircle2, iconColor: 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400', title: 'Conversation resolved', description: 'Return request processed — shipping label generated and sent to customer.', time: '1h ago', agent: 'Tier-1 Resolution' },
  { id: '10', icon: AlertTriangle, iconColor: 'bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400', title: 'SLA warning', description: 'Response time approaching threshold for 2 queued conversations.', time: '2h ago', agent: 'VIP Escalation' },
]

export default function ActivityPage() {
  return (
    <div>
      <div>
        <h1 className="font-display text-[24px] font-bold text-indigo-800 dark:text-slate-200">Activity</h1>
        <p className="mt-1 text-[14px] text-slate-500 dark:text-slate-400">Live feed of agent actions and conversations.</p>
      </div>

      <div className="mt-8 space-y-1">
        {activities.map((item, i) => (
          <motion.div
            key={item.id}
            className="flex gap-4 rounded-xl px-4 py-4 transition hover:bg-white dark:hover:bg-white/[0.03]"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: i * 0.03 }}
          >
            <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${item.iconColor}`}>
              <item.icon size={16} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="text-[14px] font-medium text-indigo-800 dark:text-slate-200">{item.title}</p>
                <span className="rounded-full bg-slate-100 dark:bg-white/5 px-2.5 py-0.5 text-[11px] font-medium text-slate-500 dark:text-slate-400">{item.agent}</span>
              </div>
              <p className="mt-1 text-[13px] leading-relaxed text-slate-500 dark:text-slate-400">{item.description}</p>
            </div>
            <span className="shrink-0 text-[12px] text-slate-400">{item.time}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
