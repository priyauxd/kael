import { Check } from 'lucide-react'

interface StepIndicatorProps {
  currentStep: number
  totalSteps: number
  labels: string[]
}

export default function StepIndicator({
  currentStep,
  totalSteps,
  labels,
}: StepIndicatorProps) {
  return (
    <div className="mx-auto flex w-full max-w-2xl items-start">
      {Array.from({ length: totalSteps }, (_, i) => {
        const step = i + 1
        const isComplete = step < currentStep
        const isCurrent = step === currentStep

        return (
          <div key={step} className="contents">
            <div className="flex shrink-0 flex-col items-center gap-1.5">
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold transition-all ${
                  isComplete ? 'bg-indigo-800 text-white' : ''
                } ${
                  isCurrent ? 'bg-violet-500 text-white ring-4 ring-violet-100 dark:ring-violet-500/20' : ''
                } ${
                  !isComplete && !isCurrent ? 'bg-slate-200 dark:bg-slate-700 text-slate-400' : ''
                }`}
              >
                {isComplete ? <Check className="h-3.5 w-3.5" /> : step}
              </div>
              <span
                className={`text-center text-[11px] leading-tight ${
                  isCurrent ? 'font-medium text-slate-700 dark:text-slate-200' : 'text-slate-400'
                }`}
              >
                {labels[i]}
              </span>
            </div>
            {step < totalSteps && (
              <div
                className={`mx-1 mt-[18px] h-0.5 flex-1 transition-all ${
                  isComplete ? 'bg-indigo-800' : 'bg-slate-200 dark:bg-slate-700'
                }`}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}
