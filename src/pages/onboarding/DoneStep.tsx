import { useNavigate } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Bot, MessageSquare, BarChart3 } from 'lucide-react'
import OnboardingLayout from '../../components/OnboardingLayout'

const STEP_LABELS = ['Company', 'Use Case', 'Agent', 'Plan', 'Done']

export default function DoneStep() {
  const navigate = useNavigate()

  return (
    <OnboardingLayout currentStep={5} totalSteps={5} stepLabels={STEP_LABELS}>
      <div className="mb-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-violet-200/50 dark:border-violet-500/20 bg-violet-50 dark:bg-violet-500/10">
          <CheckCircle2 className="h-9 w-9 text-violet-600 dark:text-violet-400" />
        </div>
        <h1 className="mb-2 text-2xl font-bold text-slate-700 dark:text-slate-200">
          You're all set!
        </h1>
        <p className="text-slate-400">
          Your workspace is live. Your first agent is queued and ready to configure.
        </p>
      </div>

      <div className="mb-6 rounded-xl border border-slate-200 dark:border-slate-700/40 bg-white dark:bg-[#16142A] p-5">
        <h3 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-200">
          Your workspace is ready with:
        </h3>
        <ul className="space-y-3">
          {[
            { icon: Bot, text: 'AI agents for autonomous CX resolution' },
            { icon: MessageSquare, text: 'Multi-channel conversations — WhatsApp, email, chat' },
            { icon: BarChart3, text: 'Live dashboard with CSAT, response time & more' },
          ].map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-center gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-50 dark:bg-violet-500/10">
                <Icon className="h-4 w-4 text-violet-600 dark:text-violet-400" />
              </div>
              <span className="text-sm text-slate-500 dark:text-slate-400">{text}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={() => navigate('/app')}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-violet-500 py-3 font-semibold text-white shadow-[0_4px_14px_rgba(139,92,246,0.35)] transition-colors hover:bg-violet-600"
      >
        Open Mission Control
        <ArrowRight className="h-4 w-4" />
      </button>

      <button
        onClick={() => navigate('/app')}
        className="mt-3 w-full py-2 text-center text-sm font-medium text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
      >
        Skip for now &mdash; go to dashboard
      </button>
    </OnboardingLayout>
  )
}
