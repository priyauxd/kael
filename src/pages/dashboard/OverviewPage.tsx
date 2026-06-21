import { useNavigate } from 'react-router-dom'
import {
  User, CreditCard, Users, Shield, Settings, ArrowUpRight, ArrowRight,
  CheckCircle2, Circle, Bot, Plug, Building2,
  BookOpen, Lightbulb, Rocket, GraduationCap,
} from 'lucide-react'

const SETUP_STEPS = [
  {
    id: 'register',
    label: 'Workspace created',
    description: 'Company details and workspace configured',
    complete: true,
  },
  {
    id: 'agent',
    label: 'First agent deployed',
    description: 'Tier-1 Resolution agent — active on WhatsApp & Chat',
    complete: true,
  },
  {
    id: 'channels',
    label: 'Connect your channels',
    description: 'Add WhatsApp, email, voice, or Slack to go live',
    complete: false,
    action: '/app/settings',
    actionLabel: 'Connect channels',
  },
]

export default function OverviewPage() {
  const navigate = useNavigate()
  const completedSteps = SETUP_STEPS.filter(s => s.complete).length
  const progressPercent = Math.round((completedSteps / SETUP_STEPS.length) * 100)

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-700 dark:text-slate-200">Hello, Priya 👋</h1>
        <p className="mt-1 text-sm text-slate-400">Welcome to Mission Control. Let's get your agents ready.</p>
      </div>

      <div className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-[2fr_1fr]">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-700/40 bg-white dark:bg-[#16142A] p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-base font-semibold text-slate-700 dark:text-slate-200">Setup checklist</h2>
              <p className="mt-0.5 text-xs text-slate-400">{completedSteps} of {SETUP_STEPS.length} steps completed</p>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="h-2 w-24 overflow-hidden rounded-full bg-slate-100 dark:bg-white/10">
                <div
                  className="h-full rounded-full bg-violet-500 transition-all"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">{progressPercent}%</span>
            </div>
          </div>

          <div className="space-y-3">
            {SETUP_STEPS.map(step => (
              <div
                key={step.id}
                className={`flex items-start gap-3.5 rounded-xl border p-3.5 transition-all ${
                  step.complete
                    ? 'border-green-100 dark:border-green-500/20 bg-green-50/40 dark:bg-green-500/5'
                    : 'border-violet-200/50 dark:border-violet-500/20 bg-violet-50/50 dark:bg-violet-500/5'
                }`}
              >
                <div className={`mt-0.5 shrink-0 ${step.complete ? 'text-green-500' : 'text-slate-300 dark:text-slate-600'}`}>
                  {step.complete ? <CheckCircle2 className="h-5 w-5" /> : <Circle className="h-5 w-5" />}
                </div>
                <div className="min-w-0 flex-1">
                  <p className={`text-sm font-medium ${step.complete ? 'text-green-700 dark:text-green-400' : 'text-slate-700 dark:text-slate-200'}`}>
                    {step.label}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-400">{step.description}</p>
                </div>
                {step.action && (
                  <button
                    onClick={() => navigate(step.action!)}
                    className="flex shrink-0 items-center gap-1.5 rounded-full bg-violet-500 px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-violet-600"
                  >
                    {step.actionLabel}
                    <ArrowRight className="h-3 w-3" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 dark:border-slate-700/40 bg-white dark:bg-[#16142A] p-5">
          <h2 className="mb-4 text-base font-semibold text-slate-700 dark:text-slate-200">Account summary</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <User className="h-4 w-4 text-slate-400" />
              <span className="text-sm text-slate-400">Your role:</span>
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Admin, Owner</span>
            </div>
            <div className="flex items-center gap-3">
              <CreditCard className="h-4 w-4 text-slate-400" />
              <span className="text-sm text-slate-400">Plan:</span>
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Business</span>
            </div>
            <div className="flex items-center gap-3">
              <Users className="h-4 w-4 text-slate-400" />
              <span className="text-sm text-slate-400">Agents:</span>
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">3 active</span>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="h-4 w-4 text-slate-400" />
              <span className="text-sm text-slate-400">Trial:</span>
              <span className="text-sm font-semibold text-green-600 dark:text-green-400">14 days left</span>
            </div>
          </div>

          <div className="mt-5 border-t border-slate-100 dark:border-slate-700/40 pt-4">
            <button
              onClick={() => navigate('/app/settings')}
              className="flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 dark:border-slate-700/40 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 transition-colors hover:bg-slate-50 dark:hover:bg-white/5"
            >
              <Settings className="h-3.5 w-3.5" />
              Manage Settings
            </button>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="mb-3 text-base font-semibold text-slate-700 dark:text-slate-200">Quick actions</h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <button
            onClick={() => navigate('/app/agents')}
            className="group flex items-center gap-3.5 rounded-2xl border border-slate-200 dark:border-slate-700/40 bg-white dark:bg-[#16142A] p-4 text-left transition-all hover:border-violet-300/50 hover:shadow-sm"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-100 dark:border-violet-500/20 bg-violet-50 dark:bg-violet-500/10">
              <Bot className="h-5 w-5 text-violet-600 dark:text-violet-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 transition-colors group-hover:text-violet-700 dark:group-hover:text-violet-400">Deploy Agent</p>
              <p className="text-xs text-slate-400">Create and configure a new agent</p>
            </div>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-300 dark:text-slate-600 transition-colors group-hover:text-violet-600 dark:group-hover:text-violet-400" />
          </button>

          <button
            onClick={() => navigate('/app/settings')}
            className="group flex items-center gap-3.5 rounded-2xl border border-slate-200 dark:border-slate-700/40 bg-white dark:bg-[#16142A] p-4 text-left transition-all hover:border-violet-300/50 hover:shadow-sm"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-sky-100 dark:border-sky-500/20 bg-sky-50 dark:bg-sky-500/10">
              <Plug className="h-5 w-5 text-sky-600 dark:text-sky-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 transition-colors group-hover:text-violet-700 dark:group-hover:text-violet-400">Connect Channels</p>
              <p className="text-xs text-slate-400">WhatsApp, email & more</p>
            </div>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-300 dark:text-slate-600 transition-colors group-hover:text-violet-600 dark:group-hover:text-violet-400" />
          </button>

          <button
            onClick={() => navigate('/app/settings')}
            className="group flex items-center gap-3.5 rounded-2xl border border-slate-200 dark:border-slate-700/40 bg-white dark:bg-[#16142A] p-4 text-left transition-all hover:border-violet-300/50 hover:shadow-sm"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-purple-100 dark:border-purple-500/20 bg-purple-50 dark:bg-purple-500/10">
              <Building2 className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 transition-colors group-hover:text-violet-700 dark:group-hover:text-violet-400">Company Profile</p>
              <p className="text-xs text-slate-400">Update business details</p>
            </div>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-300 dark:text-slate-600 transition-colors group-hover:text-violet-600 dark:group-hover:text-violet-400" />
          </button>
        </div>
      </div>

      <div className="mb-6">
        <div className="rounded-2xl border border-violet-200/40 dark:border-violet-500/20 bg-gradient-to-br from-violet-50 to-white dark:from-violet-500/10 dark:to-[#16142A] p-5">
          <div className="mb-3 flex items-start justify-between">
            <div>
              <div className="mb-1 flex items-center gap-2">
                <h2 className="text-base font-semibold text-slate-700 dark:text-slate-200">Business Plan</h2>
                <span className="rounded-full bg-green-100 dark:bg-green-500/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-green-700 dark:text-green-400">Trial</span>
              </div>
              <p className="text-sm text-slate-400">$49/month after trial ends</p>
            </div>
            <button
              onClick={() => navigate('/app/settings')}
              className="flex items-center gap-1 text-xs font-medium text-violet-600 dark:text-violet-400 hover:text-violet-700"
            >
              Manage plan <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {[
              { label: 'AI Agents', value: 'Up to 10' },
              { label: 'Conversations', value: 'Unlimited' },
              { label: 'Channels', value: 'All included' },
              { label: 'Knowledge base', value: 'Included' },
            ].map(({ label, value }) => (
              <div key={label} className="rounded-xl border border-violet-200/30 dark:border-violet-500/15 bg-white/70 dark:bg-white/5 px-3.5 py-2.5">
                <p className="text-xs text-slate-400">{label}</p>
                <p className="mt-0.5 text-sm font-semibold text-slate-700 dark:text-slate-200">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="mb-3 text-base font-semibold text-slate-700 dark:text-slate-200">Resources</h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: 'Help Center', desc: 'Browse articles and guides to find answers quickly.', icon: BookOpen, color: 'text-green-600 dark:text-green-400' },
            { title: 'KAEL Academy', desc: 'Videos, courses, and best practices for AI agents.', icon: GraduationCap, color: 'text-violet-600 dark:text-violet-400' },
            { title: 'Getting Started', desc: 'Follow simple steps to deploy your first agent.', icon: Rocket, color: 'text-sky-600 dark:text-sky-400' },
            { title: "What's New", desc: 'See the latest features and improvements.', icon: Lightbulb, color: 'text-purple-600 dark:text-purple-400' },
          ].map(({ title, desc, icon: Icon, color }) => (
            <div key={title} className="group cursor-pointer rounded-2xl border border-slate-200 dark:border-slate-700/40 bg-white dark:bg-[#16142A] p-4 transition-all hover:border-violet-300/50 hover:shadow-sm">
              <div className="mb-2 flex items-center gap-2.5">
                <Icon className={`h-5 w-5 ${color}`} />
                <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-200 transition-colors group-hover:text-violet-700 dark:group-hover:text-violet-400">{title}</h3>
              </div>
              <p className="text-xs leading-relaxed text-slate-400">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
