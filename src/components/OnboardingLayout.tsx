import type { ReactNode } from 'react'
import StepIndicator from './StepIndicator'
import KaelLogo from './KaelLogo'

interface OnboardingLayoutProps {
  children: ReactNode
  currentStep: number
  totalSteps: number
  stepLabels: string[]
  showSteps?: boolean
  wide?: boolean
}

export default function OnboardingLayout({
  children,
  currentStep,
  totalSteps,
  stepLabels,
  showSteps = true,
  wide = false,
}: OnboardingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-[#0F0E1A]">
      <header className="flex items-center px-6 py-5">
        <KaelLogo className="h-8" />
      </header>

      {showSteps && (
        <div className="flex flex-col items-center gap-3 px-6 pb-4">
          <span className="text-sm text-slate-400">
            Step {currentStep} of {totalSteps}
          </span>
          <StepIndicator
            currentStep={currentStep}
            totalSteps={totalSteps}
            labels={stepLabels}
          />
        </div>
      )}

      <main className="flex flex-1 items-start justify-center px-6 py-8">
        <div className={`w-full ${wide ? 'max-w-4xl' : 'max-w-md'}`}>{children}</div>
      </main>

      <footer className="px-6 py-4 text-center text-xs text-slate-400">
        &copy; 2026 KAEL &middot; All rights reserved
      </footer>
    </div>
  )
}
