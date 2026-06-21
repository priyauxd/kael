import { Bot, MessageSquare, Clock, TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react'

const stats = [
  { label: 'Active Agents', value: '3', change: '+1', up: true, icon: Bot, color: 'bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400' },
  { label: 'Conversations Today', value: '284', change: '+12%', up: true, icon: MessageSquare, color: 'bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400' },
  { label: 'Avg Response Time', value: '1.2s', change: '-0.3s', up: true, icon: Clock, color: 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' },
  { label: 'Resolution Rate', value: '94.2%', change: '+2.1%', up: true, icon: TrendingUp, color: 'bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400' },
]

const agents = [
  { name: 'Tier-1 Resolution', status: 'active', conversations: 142, csat: '96%' },
  { name: 'Outbound Sales', status: 'active', conversations: 89, csat: '91%' },
  { name: 'VIP Escalation', status: 'paused', conversations: 53, csat: '98%' },
]

const recentActivity = [
  { text: 'Agent "Tier-1 Resolution" resolved billing inquiry', time: '2m ago', type: 'resolved' },
  { text: 'New conversation routed to Outbound Sales agent', time: '5m ago', type: 'routed' },
  { text: 'VIP customer escalated to human specialist', time: '8m ago', type: 'escalated' },
  { text: 'Agent "Tier-1 Resolution" handled return request', time: '12m ago', type: 'resolved' },
  { text: 'New lead qualified by Sales agent — demo booked', time: '18m ago', type: 'resolved' },
  { text: 'CSAT score updated: 94.2% (+2.1%)', time: '1h ago', type: 'metric' },
]

const chartData = [35, 42, 38, 55, 48, 62, 58, 72, 65, 80, 75, 82, 78, 88, 85, 90, 82, 78, 85, 92, 88, 76, 70, 65]

export default function DashboardStatsPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-xl font-bold text-slate-700 dark:text-slate-200">Dashboard</h1>
        <p className="mt-1 text-sm text-slate-400">Real-time overview of your AI agents and conversations.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(stat => (
          <div key={stat.label} className="rounded-2xl border border-slate-200 dark:border-slate-700/40 bg-white dark:bg-[#16142A] p-5">
            <div className="flex items-center justify-between">
              <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${stat.color}`}>
                <stat.icon size={18} />
              </div>
              <span className={`flex items-center gap-0.5 text-[12px] font-medium ${stat.up ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-500'}`}>
                {stat.up ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                {stat.change}
              </span>
            </div>
            <p className="mt-4 text-2xl font-bold text-slate-700 dark:text-slate-200">{stat.value}</p>
            <p className="mt-0.5 text-xs text-slate-400">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-700/40 bg-white dark:bg-[#16142A] p-5 lg:col-span-2">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-slate-700 dark:text-slate-200">Conversations — Last 24h</h2>
            <span className="rounded-full bg-violet-50 dark:bg-violet-500/10 px-3 py-1 text-[11px] font-medium text-violet-600 dark:text-violet-400">Live</span>
          </div>
          <div className="mt-5 flex h-40 items-end gap-1">
            {chartData.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm bg-violet-200 dark:bg-violet-500/30 transition-colors hover:bg-violet-400 dark:hover:bg-violet-500/60"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="mt-3 flex justify-between text-[11px] text-slate-400">
            <span>12:00 AM</span>
            <span>6:00 AM</span>
            <span>12:00 PM</span>
            <span>6:00 PM</span>
            <span>Now</span>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 dark:border-slate-700/40 bg-white dark:bg-[#16142A] p-5">
          <h2 className="text-sm font-semibold text-slate-700 dark:text-slate-200">Active Agents</h2>
          <div className="mt-4 space-y-4">
            {agents.map(agent => (
              <div key={agent.name} className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500 text-xs font-bold text-white">
                  {agent.name[0]}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-200">{agent.name}</p>
                  <p className="text-[11px] text-slate-400">{agent.conversations} conversations · {agent.csat} CSAT</p>
                </div>
                <span className={`h-2 w-2 rounded-full ${agent.status === 'active' ? 'bg-emerald-400' : 'bg-slate-300 dark:bg-slate-600'}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-slate-200 dark:border-slate-700/40 bg-white dark:bg-[#16142A] p-5">
        <h2 className="text-sm font-semibold text-slate-700 dark:text-slate-200">Recent Activity</h2>
        <div className="mt-4 space-y-3.5">
          {recentActivity.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${
                item.type === 'resolved' ? 'bg-emerald-400' :
                item.type === 'escalated' ? 'bg-amber-400' :
                item.type === 'routed' ? 'bg-sky-400' :
                'bg-violet-400'
              }`} />
              <p className="min-w-0 flex-1 text-sm text-slate-500 dark:text-slate-400">{item.text}</p>
              <span className="shrink-0 text-xs text-slate-400">{item.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
