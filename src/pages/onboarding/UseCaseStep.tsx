import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, ChevronLeft, Headphones, ShoppingCart, Heart } from 'lucide-react'
import OnboardingLayout from '../../components/OnboardingLayout'

const STEP_LABELS = ['Company', 'Use Case', 'Agent', 'Plan', 'Done']

const USE_CASES = [
  { id: 'support', icon: Headphones, label: 'Customer Support', desc: 'Resolve tickets, answer FAQs, handle billing queries', color: 'bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400' },
  { id: 'sales', icon: ShoppingCart, label: 'Sales & Lead Qualification', desc: 'Qualify leads, book demos, follow up on deals', color: 'bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400' },
  { id: 'retention', icon: Heart, label: 'Retention & Care', desc: 'VIP escalation, churn prevention, loyalty programs', color: 'bg-pink-50 dark:bg-pink-500/10 text-pink-600 dark:text-pink-400' },
]

export default function UseCaseStep() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!selected) {
      setError('Please select a use case')
      return
    }
    navigate('/onboarding/agent')
  }

  return (
    <OnboardingLayout currentStep={2} totalSteps={5} stepLabels={STEP_LABELS}>
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-2xl font-bold text-slate-700 dark:text-slate-200">What will KAEL handle?</h1>
        <p className="text-slate-400">Pick your primary use case. You can add more later.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {USE_CASES.map(uc => (
          <button
            key={uc.id}
            type="button"
            onClick={() => { setSelected(uc.id); setError('') }}
            className={`flex w-full items-start gap-3.5 rounded-2xl border p-4 text-left transition-all ${
              selected === uc.id
                ? 'border-violet-400 bg-violet-50 dark:bg-violet-500/10 shadow-sm'
                : 'border-slate-200 dark:border-slate-700/40 bg-white dark:bg-white/5 hover:border-slate-300 dark:hover:border-slate-600'
            }`}
          >
            <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
              selected === uc.id ? 'bg-violet-500 text-white' : uc.color
            }`}>
              <uc.icon className="h-5 w-5" />
            </div>
            <div>
              <p className={`text-sm font-semibold ${selected === uc.id ? 'text-violet-700 dark:text-violet-400' : 'text-slate-700 dark:text-slate-200'}`}>{uc.label}</p>
              <p className="mt-0.5 text-xs text-slate-400">{uc.desc}</p>
            </div>
          </button>
        ))}

        {error && <p className="text-sm text-red-500">{error}</p>}

        <div className="flex items-center justify-between pt-4">
          <button
            type="button"
            onClick={() => navigate('/onboarding')}
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
