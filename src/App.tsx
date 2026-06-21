import { HashRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import CompanyStep from './pages/onboarding/CompanyStep'
import UseCaseStep from './pages/onboarding/UseCaseStep'
import AgentStep from './pages/onboarding/AgentStep'
import PlanStep from './pages/onboarding/PlanStep'
import DoneStep from './pages/onboarding/DoneStep'
import DashboardLayout from './pages/dashboard/DashboardLayout'
import OverviewPage from './pages/dashboard/OverviewPage'
import DashboardStatsPage from './pages/dashboard/DashboardStatsPage'
import AgentsPage from './pages/dashboard/AgentsPage'
import TasksPage from './pages/dashboard/TasksPage'
import ActivityPage from './pages/dashboard/ActivityPage'
import SettingsPage from './pages/dashboard/SettingsPage'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/onboarding" element={<CompanyStep />} />
        <Route path="/onboarding/use-case" element={<UseCaseStep />} />
        <Route path="/onboarding/agent" element={<AgentStep />} />
        <Route path="/onboarding/plan" element={<PlanStep />} />
        <Route path="/onboarding/done" element={<DoneStep />} />
        <Route path="/app" element={<DashboardLayout />}>
          <Route index element={<OverviewPage />} />
          <Route path="dashboard" element={<DashboardStatsPage />} />
          <Route path="agents" element={<AgentsPage />} />
          <Route path="tasks" element={<TasksPage />} />
          <Route path="activity" element={<ActivityPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="knowledge" element={<div className="text-sm text-slate-400">Knowledge Base — coming soon</div>} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
