import { motion } from 'framer-motion'
import { Plus, GripVertical } from 'lucide-react'

interface Task {
  id: string
  title: string
  agent: string
  priority: 'high' | 'medium' | 'low'
  type: string
}

const columns: { id: string; label: string; color: string; tasks: Task[] }[] = [
  {
    id: 'todo',
    label: 'To Do',
    color: 'bg-slate-400',
    tasks: [
      { id: '1', title: 'Configure WhatsApp Business API', agent: 'Tier-1 Resolution', priority: 'high', type: 'Setup' },
      { id: '2', title: 'Write FAQ knowledge base', agent: 'Tier-1 Resolution', priority: 'medium', type: 'Content' },
    ],
  },
  {
    id: 'progress',
    label: 'In Progress',
    color: 'bg-violet-500',
    tasks: [
      { id: '3', title: 'Train on billing conversation logs', agent: 'Tier-1 Resolution', priority: 'high', type: 'Training' },
      { id: '4', title: 'Set up CRM integration', agent: 'Outbound Sales', priority: 'medium', type: 'Integration' },
      { id: '5', title: 'Define escalation rules', agent: 'VIP Escalation', priority: 'high', type: 'Config' },
    ],
  },
  {
    id: 'review',
    label: 'Review',
    color: 'bg-amber-500',
    tasks: [
      { id: '6', title: 'Tone & personality guidelines', agent: 'All Agents', priority: 'medium', type: 'Content' },
    ],
  },
  {
    id: 'done',
    label: 'Done',
    color: 'bg-emerald-500',
    tasks: [
      { id: '7', title: 'Agent deployment pipeline', agent: 'Platform', priority: 'high', type: 'DevOps' },
      { id: '8', title: 'Set SLA thresholds', agent: 'VIP Escalation', priority: 'medium', type: 'Config' },
    ],
  },
]

const priorityColors = {
  high: 'bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400',
  medium: 'bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400',
  low: 'bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400',
}

export default function TasksPage() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-[24px] font-bold text-indigo-800 dark:text-slate-200">Tasks</h1>
          <p className="mt-1 text-[14px] text-slate-500 dark:text-slate-400">Track agent setup, training, and deployment tasks.</p>
        </div>
        <button className="flex items-center gap-2 rounded-full bg-violet-500 px-5 py-2.5 text-[14px] font-medium text-white transition hover:bg-violet-600">
          <Plus size={16} /> New Task
        </button>
      </div>

      <div className="mt-8 grid grid-cols-4 gap-5">
        {columns.map(col => (
          <div key={col.id}>
            <div className="flex items-center gap-2 pb-4">
              <span className={`h-2 w-2 rounded-full ${col.color}`} />
              <h3 className="text-[13px] font-semibold text-slate-600 dark:text-slate-300">{col.label}</h3>
              <span className="ml-auto text-[12px] text-slate-400">{col.tasks.length}</span>
            </div>

            <div className="space-y-3">
              {col.tasks.map((task, i) => (
                <motion.div
                  key={task.id}
                  className="group cursor-pointer rounded-xl border border-slate-200 dark:border-slate-700/40 bg-white dark:bg-[#16142A] p-4 transition hover:border-violet-200 dark:hover:border-violet-500/30 hover:shadow-sm"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.03 }}
                >
                  <div className="flex items-start justify-between">
                    <p className="text-[13px] font-medium text-indigo-800 dark:text-slate-200">{task.title}</p>
                    <GripVertical size={14} className="shrink-0 text-slate-300 dark:text-slate-600 opacity-0 transition group-hover:opacity-100" />
                  </div>
                  <p className="mt-2 text-[12px] text-slate-400">{task.agent}</p>
                  <div className="mt-3 flex items-center gap-2">
                    <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-medium ${priorityColors[task.priority]}`}>
                      {task.priority}
                    </span>
                    <span className="rounded-full bg-slate-100 dark:bg-white/5 px-2.5 py-0.5 text-[10px] font-medium text-slate-500 dark:text-slate-400">
                      {task.type}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
