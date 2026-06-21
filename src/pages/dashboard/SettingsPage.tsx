import { useState } from 'react'
import { Building2, Bell, Shield, Globe, Key } from 'lucide-react'

function Toggle({ enabled, onToggle }: { enabled: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className={`relative h-6 w-11 rounded-full transition ${enabled ? 'bg-violet-500' : 'bg-slate-200 dark:bg-slate-700'}`}
    >
      <span className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${enabled ? 'translate-x-5' : ''}`} />
    </button>
  )
}

export default function SettingsPage() {
  const [notifications, setNotifications] = useState(true)
  const [escalationAlerts, setEscalationAlerts] = useState(true)
  const [weeklyReport, setWeeklyReport] = useState(false)

  return (
    <div>
      <div>
        <h1 className="font-display text-[24px] font-bold text-indigo-800 dark:text-slate-200">Settings</h1>
        <p className="mt-1 text-[14px] text-slate-500 dark:text-slate-400">Configure your workspace and agent preferences.</p>
      </div>

      <div className="mt-8 max-w-2xl space-y-6">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-700/40 bg-white dark:bg-[#16142A] p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400">
              <Building2 size={18} />
            </div>
            <div>
              <h2 className="text-[15px] font-semibold text-indigo-800 dark:text-slate-200">Organization</h2>
              <p className="text-[13px] text-slate-400">Company and workspace details</p>
            </div>
          </div>
          <div className="mt-6 space-y-4">
            <div>
              <label className="block text-[13px] font-medium text-slate-600 dark:text-slate-300">Company name</label>
              <input
                type="text"
                defaultValue="Acme Inc."
                className="mt-1.5 w-full rounded-xl border border-slate-200 dark:border-slate-700/40 bg-white dark:bg-white/5 px-4 py-2.5 text-[14px] text-slate-800 dark:text-slate-200 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-100 dark:focus:ring-violet-500/20"
              />
            </div>
            <div>
              <label className="block text-[13px] font-medium text-slate-600 dark:text-slate-300">Workspace URL</label>
              <input
                type="text"
                defaultValue="acme.kael.ai"
                className="mt-1.5 w-full rounded-xl border border-slate-200 dark:border-slate-700/40 bg-white dark:bg-white/5 px-4 py-2.5 text-[14px] text-slate-800 dark:text-slate-200 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-100 dark:focus:ring-violet-500/20"
              />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 dark:border-slate-700/40 bg-white dark:bg-[#16142A] p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400">
              <Bell size={18} />
            </div>
            <div>
              <h2 className="text-[15px] font-semibold text-indigo-800 dark:text-slate-200">Notifications</h2>
              <p className="text-[13px] text-slate-400">Control when and how you get notified</p>
            </div>
          </div>
          <div className="mt-6 space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[14px] font-medium text-slate-700 dark:text-slate-200">Push notifications</p>
                <p className="text-[12px] text-slate-400">Get notified about agent actions in real time</p>
              </div>
              <Toggle enabled={notifications} onToggle={() => setNotifications(!notifications)} />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[14px] font-medium text-slate-700 dark:text-slate-200">Escalation alerts</p>
                <p className="text-[12px] text-slate-400">Notify when a conversation is escalated to a human</p>
              </div>
              <Toggle enabled={escalationAlerts} onToggle={() => setEscalationAlerts(!escalationAlerts)} />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[14px] font-medium text-slate-700 dark:text-slate-200">Weekly digest</p>
                <p className="text-[12px] text-slate-400">Summary of agent performance every Monday</p>
              </div>
              <Toggle enabled={weeklyReport} onToggle={() => setWeeklyReport(!weeklyReport)} />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 dark:border-slate-700/40 bg-white dark:bg-[#16142A] p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <Globe size={18} />
            </div>
            <div>
              <h2 className="text-[15px] font-semibold text-indigo-800 dark:text-slate-200">Channels</h2>
              <p className="text-[13px] text-slate-400">Connected communication channels</p>
            </div>
          </div>
          <div className="mt-6 space-y-3">
            {[
              { name: 'WhatsApp Business', status: 'Connected', connected: true },
              { name: 'Email (SMTP)', status: 'Connected', connected: true },
              { name: 'Voice (Twilio)', status: 'Not configured', connected: false },
              { name: 'Slack', status: 'Not configured', connected: false },
            ].map(ch => (
              <div key={ch.name} className="flex items-center justify-between rounded-xl bg-slate-50 dark:bg-white/[0.03] px-4 py-3">
                <div className="flex items-center gap-3">
                  <span className={`h-2 w-2 rounded-full ${ch.connected ? 'bg-emerald-400' : 'bg-slate-300 dark:bg-slate-600'}`} />
                  <span className="text-[14px] font-medium text-slate-700 dark:text-slate-200">{ch.name}</span>
                </div>
                <span className={`text-[12px] ${ch.connected ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400'}`}>{ch.status}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 dark:border-slate-700/40 bg-white dark:bg-[#16142A] p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400">
              <Key size={18} />
            </div>
            <div>
              <h2 className="text-[15px] font-semibold text-indigo-800 dark:text-slate-200">API & Integrations</h2>
              <p className="text-[13px] text-slate-400">Manage API keys and third-party connections</p>
            </div>
          </div>
          <div className="mt-6">
            <div className="flex items-center justify-between rounded-xl bg-slate-50 dark:bg-white/[0.03] px-4 py-3">
              <div>
                <p className="text-[14px] font-medium text-slate-700 dark:text-slate-200">API Key</p>
                <p className="font-mono text-[13px] text-slate-400">kael_live_••••••••••••4f2a</p>
              </div>
              <button className="text-[13px] font-medium text-violet-600 dark:text-violet-400 transition hover:text-violet-700">Regenerate</button>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-red-100 dark:border-red-500/20 bg-white dark:bg-[#16142A] p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-50 dark:bg-red-500/10 text-red-500">
              <Shield size={18} />
            </div>
            <div>
              <h2 className="text-[15px] font-semibold text-red-700 dark:text-red-400">Danger Zone</h2>
              <p className="text-[13px] text-slate-400">Irreversible actions</p>
            </div>
          </div>
          <div className="mt-6">
            <button className="rounded-xl border border-red-200 dark:border-red-500/30 px-5 py-2.5 text-[13px] font-medium text-red-600 dark:text-red-400 transition hover:bg-red-50 dark:hover:bg-red-500/10">
              Delete Workspace
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
