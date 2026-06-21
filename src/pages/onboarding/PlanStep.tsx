import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import OnboardingLayout from '../../components/OnboardingLayout'

const STEP_LABELS = ['Company', 'Use Case', 'Agent', 'Plan', 'Done']

type Billing = 'monthly' | 'quarterly' | 'annual'

const BILLING_OPTIONS: { key: Billing; label: string; discount: number; badge?: string }[] = [
  { key: 'monthly', label: 'Monthly', discount: 0 },
  { key: 'quarterly', label: 'Quarterly', discount: 10, badge: '10% off' },
  { key: 'annual', label: 'Annual', discount: 20, badge: '20% off' },
]

const PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    basePrice: 0,
    description: 'Try KAEL with 1 agent',
    features: ['1 AI agent', 'Chat channel only', '100 conversations/mo', 'Basic analytics', 'Community support'],
  },
  {
    id: 'growth',
    name: 'Growth',
    basePrice: 29,
    description: 'For growing CX teams',
    features: ['Up to 3 agents', 'Chat + Email', '1,000 conversations/mo', 'Knowledge base', 'Email support'],
  },
  {
    id: 'business',
    name: 'Business',
    basePrice: 49,
    description: 'For teams that need more',
    popular: true,
    features: ['Up to 10 agents', 'All channels', 'Unlimited conversations', 'Human handover', 'Priority support', 'Custom escalation rules'],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    basePrice: 99,
    description: 'For large organizations',
    features: ['Unlimited agents', 'All channels + Voice', 'Dedicated CSM', 'SSO & audit logs', 'SLA guarantees', 'Custom integrations'],
  },
]

function calcPrice(base: number, billing: Billing) {
  if (base === 0) return 0
  const discount = BILLING_OPTIONS.find(b => b.key === billing)!.discount
  return Math.round(base * (1 - discount / 100))
}

export default function PlanStep() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState('business')
  const [billing, setBilling] = useState<Billing>('monthly')

  const handleContinue = () => {
    navigate('/onboarding/done')
  }

  return (
    <OnboardingLayout currentStep={4} totalSteps={5} stepLabels={STEP_LABELS} wide>
      <div className="mb-6 text-center">
        <h1 className="mb-2 text-2xl font-bold text-slate-700 dark:text-slate-200">Choose your plan</h1>
        <p className="text-sm text-slate-400">
          All plans include a 14-day free trial. Cancel anytime.
        </p>
      </div>

      <div className="mb-6 flex justify-center">
        <div className="flex items-center gap-0.5 rounded-full bg-slate-100 dark:bg-white/5 p-1">
          {BILLING_OPTIONS.map(({ key, label, badge }) => (
            <button
              key={key}
              onClick={() => setBilling(key)}
              className={`relative flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                billing === key
                  ? 'bg-white dark:bg-[#16142A] text-slate-700 dark:text-slate-200 shadow-sm'
                  : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
              }`}
            >
              {label}
              {badge && (
                <span className={`rounded-full px-1.5 py-0.5 text-[10px] font-semibold ${
                  billing === key ? 'bg-green-100 dark:bg-green-500/15 text-green-700 dark:text-green-400' : 'bg-slate-200 dark:bg-white/10 text-slate-500 dark:text-slate-400'
                }`}>
                  {badge}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {PLANS.map(plan => {
          const price = calcPrice(plan.basePrice, billing)
          const isSelected = selected === plan.id
          return (
            <button
              key={plan.id}
              onClick={() => setSelected(plan.id)}
              className={`relative flex flex-col rounded-2xl border-2 p-4 text-left transition-all ${
                isSelected
                  ? 'border-violet-400 bg-violet-50 dark:bg-violet-500/10 shadow-sm'
                  : 'border-slate-200 dark:border-slate-700/40 bg-white dark:bg-white/5 hover:border-slate-300 dark:hover:border-slate-600'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-2.5 right-3 rounded-full bg-indigo-800 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                  Popular
                </span>
              )}
              <div className="mb-2">
                <h3 className="font-semibold text-slate-700 dark:text-slate-200">{plan.name}</h3>
                <p className="text-xs leading-snug text-slate-400">{plan.description}</p>
              </div>
              <div className="mb-3">
                {price === 0 ? (
                  <span className="text-2xl font-bold text-slate-700 dark:text-slate-200">Free</span>
                ) : (
                  <>
                    <span className="text-2xl font-bold text-slate-700 dark:text-slate-200">${price}</span>
                    <span className="text-xs text-slate-400">/mo</span>
                  </>
                )}
                {plan.basePrice > 0 && billing !== 'monthly' && (
                  <p className="mt-0.5 text-[10px] font-medium text-green-600 dark:text-green-400">
                    Save {BILLING_OPTIONS.find(b => b.key === billing)!.discount}% vs monthly
                  </p>
                )}
              </div>
              <ul className="flex-1 space-y-1.5">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-1.5 text-xs text-slate-400">
                    <Check className={`mt-0.5 h-3 w-3 shrink-0 ${isSelected ? 'text-violet-600 dark:text-violet-400' : 'text-slate-300 dark:text-slate-600'}`} />
                    {f}
                  </li>
                ))}
              </ul>
            </button>
          )
        })}
      </div>

      <button
        onClick={handleContinue}
        className="mx-auto mt-6 flex w-full max-w-md items-center justify-center gap-2 rounded-full bg-violet-500 py-3 font-semibold text-white shadow-[0_4px_14px_rgba(139,92,246,0.35)] transition-colors hover:bg-violet-600"
      >
        Start Free Trial
        <ArrowRight className="h-4 w-4" />
      </button>

      <p className="mt-3 text-center text-xs text-slate-400">
        Billed {billing === 'monthly' ? 'monthly' : billing === 'quarterly' ? 'every 3 months' : 'annually'}. No credit card required for trial.
      </p>
    </OnboardingLayout>
  )
}
