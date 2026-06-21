import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, ChevronLeft, Bot, Zap, Shield } from 'lucide-react'
import OnboardingLayout from '../../components/OnboardingLayout'

const STEP_LABELS = ['Company', 'Use Case', 'Agent', 'Plan', 'Done']

const AGENTS = [
  {
    id: 'tier1',
    icon: Bot,
    label: 'Tier-1 Resolution Agent',
    desc: 'Handles common queries — billing, order status, returns',
    channels: ['WhatsApp', 'Chat', 'Email'],
    color: 'bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400',
  },
  {
    id: 'outbound',
    icon: Zap,
    label: 'Outbound Sales Agent',
    desc: 'Qualifies leads and books calls with your team',
    channels: ['SMS', 'Email', 'Voice'],
    color: 'bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400',
  },
  {
    id: 'vip',
    icon: Shield,
    label: 'VIP Escalation Agent',
    desc: 'Routes high-value customers to specialists instantly',
    channels: ['Priority Queue', 'Voice'],
    color: 'bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400',
  },
]

export default function AgentStep() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!selected) {
      setError('Please choose an agent template')
      return
    }
    navigate('/onboarding/plan')
  }

  return (
    <OnboardingLayout currentStep={3} totalSteps={5} stepLabels={STEP_LABELS}>
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-2xl font-bold text-slate-700 dark:text-slate-200">Deploy your first agent</h1>
        <p className="text-slate-400">Choose a template — you'll customize it inside Mission Control.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {AGENTS.map(agent => (
          <button
            key={agent.id}
            type="button"
            onClick={() => { setSelected(agent.id); setError('') }}
            className={`flex w-full items-start gap-3.5 rounded-2xl border p-4 text-left transition-all ${
              selected === agent.id
                ? 'border-violet-400 bg-violet-50 dark:bg-violet-500/10 shadow-sm'
                : 'border-slate-200 dark:border-slate-700/40 bg-white dark:bg-white/5 hover:border-slate-300 dark:hover:border-slate-600'
            }`}
          >
            <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
              selected === agent.id ? 'bg-violet-500 text-white' : agent.color
            }`}>
              <agent.icon className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <p className={`text-sm font-semibold ${selected === agent.id ? 'text-violet-700 dark:text-violet-400' : 'text-slate-700 dark:text-slate-200'}`}>{agent.label}</p>
              <p className="mt-0.5 text-xs text-slate-400">{agent.desc}</p>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {agent.channels.map(ch => (
                  <span key={ch} className="rounded-full bg-slate-100 dark:bg-white/5 px-2.5 py-0.5 text-[10px] font-medium text-slate-500 dark:text-slate-400">{ch}</span>
                ))}
              </div>
            </div>
          </button>
        ))}

        {error && <p className="text-sm text-red-500">{error}</p>}

        <div className="flex items-center justify-between pt-4">
          <button
            type="button"
            onClick={() => navigate('/onboarding/use-case')}
            className="flex items-center gap-1 text-sm text-slate-400 transition-colors hover:text-slate-600 dark:hover:text-slate-200"
          >
            <ChevronLeft className="h-4 w-4" /> Back
          </button>
          <button
            type="submit"
            className="flex items-center gap-2 rounded-full bg-violet-500 px-6 py-2.5 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(139,92,246,0.35)] transition-colors hover:bg-violet-600"
          >
            Continue <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </form>
    </OnboardingLayout>
  )
}
