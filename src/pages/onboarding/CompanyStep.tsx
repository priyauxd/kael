import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Building2 } from 'lucide-react'
import OnboardingLayout from '../../components/OnboardingLayout'

const STEP_LABELS = ['Company', 'Use Case', 'Agent', 'Plan', 'Done']

const INDUSTRIES = [
  'SaaS / Tech',
  'E-commerce',
  'Financial Services',
  'Healthcare',
  'Travel & Hospitality',
  'Other',
]

const TEAM_SIZES = [
  '1–10',
  '11–50',
  '51–200',
  '200+',
]

export default function CompanyStep() {
  const navigate = useNavigate()
  const [company, setCompany] = useState('')
  const [industry, setIndustry] = useState('')
  const [teamSize, setTeamSize] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!company.trim()) {
      setError('Please enter your company name')
      return
    }
    if (!industry) {
      setError('Please select your industry')
      return
    }
    navigate('/onboarding/use-case')
  }

  return (
    <OnboardingLayout currentStep={1} totalSteps={5} stepLabels={STEP_LABELS}>
      <div className="mb-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-200/50 dark:border-violet-500/20 bg-violet-50 dark:bg-violet-500/10">
          <Building2 className="h-7 w-7 text-violet-600 dark:text-violet-400" />
        </div>
        <h1 className="mb-2 text-2xl font-bold text-slate-700 dark:text-slate-200">Tell us about your company</h1>
        <p className="text-slate-400">We'll tailor KAEL's agents to your industry and team.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
            Company name <span className="text-red-500">*</span>
          </label>
          <input
            id="company"
            type="text"
            placeholder="Acme Inc."
            value={company}
            onChange={e => { setCompany(e.target.value); setError('') }}
            className="w-full rounded-xl border border-slate-200 dark:border-slate-700/40 bg-white dark:bg-white/5 px-4 py-3 text-slate-700 dark:text-slate-200 placeholder:text-slate-300 dark:placeholder:text-slate-600 transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-violet-400 dark:focus:ring-violet-500/40"
            autoFocus
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
            Industry <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-2 gap-2.5">
            {INDUSTRIES.map(ind => (
              <button
                key={ind}
                type="button"
                onClick={() => { setIndustry(ind); setError('') }}
                className={`rounded-xl border px-4 py-3 text-left text-sm transition ${
                  industry === ind
                    ? 'border-violet-400 bg-violet-50 dark:bg-violet-500/10 font-medium text-violet-700 dark:text-violet-400'
                    : 'border-slate-200 dark:border-slate-700/40 bg-white dark:bg-white/5 text-slate-500 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-600'
                }`}
              >
                {ind}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
            Team size
          </label>
          <div className="flex gap-2.5">
            {TEAM_SIZES.map(size => (
              <button
                key={size}
                type="button"
                onClick={() => setTeamSize(size)}
                className={`flex-1 rounded-xl border px-3 py-2.5 text-sm transition ${
                  teamSize === size
                    ? 'border-violet-400 bg-violet-50 dark:bg-violet-500/10 font-medium text-violet-700 dark:text-violet-400'
                    : 'border-slate-200 dark:border-slate-700/40 bg-white dark:bg-white/5 text-slate-500 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-600'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {error && <p className="text-sm text-red-500">{error}</p>}

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-violet-500 py-3 font-semibold text-white shadow-[0_4px_14px_rgba(139,92,246,0.35)] transition-colors hover:bg-violet-600"
        >
          Continue
          <ArrowRight className="h-4 w-4" />
        </button>
      </form>
    </OnboardingLayout>
  )
}
