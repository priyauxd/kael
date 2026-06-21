import { useState } from 'react'
import {
  Plus, MoreHorizontal, Play, Pause, LayoutGrid, List, X,
  Sparkles, BarChart3, BookOpen, Ear, HeadphonesIcon,
  Crown, CheckCircle, ClipboardCheck, UserCog, TrendingUp,
  RefreshCw, Radio, Eye, EyeOff, Settings2, Wifi, Shield,
  Power, Trash2, Copy,
} from 'lucide-react'

interface Agent {
  id: string
  agentId: string
  mailbox: string
  name: string
  initials: string
  type: string
  model: string
  status: 'active' | 'idle' | 'offline' | 'draft'
  channels: string[]
  conversations: number
  lastActive: string
  csat: string
  hidden: boolean
  color: string
}

const INITIAL_AGENTS: Agent[] = [
  { id: '1', agentId: 'AGT-001', mailbox: 'care-001@kael.cx', name: 'Care Agent', initials: 'C', type: 'Customer Care Representative', model: 'kael-cx-v2', status: 'active', channels: ['WhatsApp', 'Chat', 'Email'], conversations: 1842, lastActive: '2m ago', csat: '96%', hidden: false, color: 'bg-violet-500' },
  { id: '2', agentId: 'AGT-002', mailbox: 'sdr-002@kael.cx', name: 'SDR Agent', initials: 'S', type: 'Sales Development Representative', model: 'kael-cx-v2', status: 'active', channels: ['SMS', 'Email', 'Voice'], conversations: 923, lastActive: '1m ago', csat: '91%', hidden: false, color: 'bg-sky-500' },
  { id: '3', agentId: 'AGT-003', mailbox: 'resolve-003@kael.cx', name: 'Resolution Specialist', initials: 'R', type: 'Resolution Specialist', model: 'kael-cx-v2', status: 'idle', channels: ['WhatsApp', 'Chat', 'Voice'], conversations: 412, lastActive: '18m ago', csat: '98%', hidden: false, color: 'bg-emerald-500' },
  { id: '4', agentId: 'AGT-004', mailbox: 'qa-004@kael.cx', name: 'QA Analyst', initials: 'Q', type: 'Quality Assurance (QA) Analyst', model: 'kael-audit-v1', status: 'offline', channels: ['Chat', 'Email'], conversations: 287, lastActive: '3h ago', csat: '97%', hidden: false, color: 'bg-amber-500' },
  { id: '5', agentId: 'AGT-005', mailbox: 'voc-005@kael.cx', name: 'VOC Analyst', initials: 'V', type: 'Customer Insights / VOC Analysts', model: 'kael-insights-v1', status: 'draft', channels: ['Chat', 'Email'], conversations: 0, lastActive: 'Never', csat: '—', hidden: false, color: 'bg-pink-500' },
  { id: '6', agentId: 'AGT-006', mailbox: 'kb-006@kael.cx', name: 'Knowledge Bot', initials: 'K', type: 'Knowledge Manager', model: 'kael-cx-v2', status: 'offline', channels: ['Chat'], conversations: 156, lastActive: '2d ago', csat: '94%', hidden: true, color: 'bg-indigo-500' },
]

const TEMPLATES = [
  { id: 'voc', icon: BarChart3, label: 'Customer Insights / VOC Analysts', desc: 'Analyze voice of customer data and surface trends', prefillName: 'VOC Analyst', prefillChannels: ['Chat', 'Email'] },
  { id: 'knowledge', icon: BookOpen, label: 'Knowledge Manager', desc: 'Maintain and serve knowledge base articles', prefillName: 'Knowledge Manager', prefillChannels: ['Chat', 'Email'] },
  { id: 'social', icon: Ear, label: 'Social Listening', desc: 'Monitor and respond to social mentions', prefillName: 'Social Listener', prefillChannels: ['Chat', 'SMS'] },
  { id: 'care-rep', icon: HeadphonesIcon, label: 'Customer Care Representative', desc: 'Handle day-to-day customer inquiries', prefillName: 'Care Agent', prefillChannels: ['WhatsApp', 'Chat', 'Email'] },
  { id: 'support-specialist', icon: Shield, label: 'Support Specialist', desc: 'Deep-dive technical and product support', prefillName: 'Support Specialist', prefillChannels: ['Chat', 'Email', 'Voice'] },
  { id: 'team-lead', icon: Crown, label: 'Team Lead', desc: 'Oversee agent performance and escalations', prefillName: 'Team Lead Agent', prefillChannels: ['Chat', 'Priority Queue'] },
  { id: 'resolution', icon: CheckCircle, label: 'Resolution Specialist', desc: 'Close complex cases and disputes', prefillName: 'Resolution Specialist', prefillChannels: ['WhatsApp', 'Chat', 'Voice'] },
  { id: 'qa', icon: ClipboardCheck, label: 'Quality Assurance (QA) Analyst', desc: 'Audit conversations for quality and compliance', prefillName: 'QA Analyst', prefillChannels: ['Chat', 'Email'] },
  { id: 'care-manager', icon: UserCog, label: 'Customer Care Manager', desc: 'Strategic CX oversight and SLA management', prefillName: 'Care Manager', prefillChannels: ['Email', 'Voice', 'Priority Queue'] },
  { id: 'sdr', icon: TrendingUp, label: 'Sales Development Representative', desc: 'Qualify leads and book demos', prefillName: 'SDR Agent', prefillChannels: ['SMS', 'Email', 'Voice'] },
  { id: 'custom', icon: Sparkles, label: 'Custom Agent', desc: 'Start from scratch — you choose everything', prefillName: '', prefillChannels: [] as string[] },
]

const CHANNEL_OPTIONS = ['WhatsApp', 'Chat', 'Email', 'SMS', 'Voice', 'Priority Queue']
const MODEL_OPTIONS = ['kael-cx-v2', 'kael-audit-v1', 'kael-insights-v1']
const AVATAR_COLORS = ['bg-violet-500', 'bg-sky-500', 'bg-emerald-500', 'bg-amber-500', 'bg-pink-500', 'bg-indigo-500', 'bg-rose-500', 'bg-teal-500']

const statusConfig = {
  active: { dot: 'bg-emerald-400', badge: 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400', label: 'Active', animate: true },
  idle: { dot: 'bg-amber-400', badge: 'bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400', label: 'Idle', animate: false },
  offline: { dot: 'bg-slate-300 dark:bg-slate-600', badge: 'bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400', label: 'Offline', animate: false },
  draft: { dot: 'bg-slate-300 dark:bg-slate-600', badge: 'bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400', label: 'Draft', animate: false },
}

function AddAgentModal({ onClose, onAdd }: { onClose: () => void; onAdd: (agent: Agent) => void }) {
  const [step, setStep] = useState<'template' | 'details'>('template')
  const [template, setTemplate] = useState('')
  const [name, setName] = useState('')
  const [agentType, setAgentType] = useState('')
  const [channels, setChannels] = useState<string[]>([])
  const [model, setModel] = useState('kael-cx-v2')
  const [error, setError] = useState('')

  const isCustom = template === 'custom'

  const selectTemplate = (id: string) => {
    const tpl = TEMPLATES.find(t => t.id === id)!
    setTemplate(id)
    setName(tpl.prefillName)
    setAgentType(tpl.label)
    setChannels([...tpl.prefillChannels])
    setStep('details')
  }

  const toggleChannel = (ch: string) => {
    setChannels(prev => prev.includes(ch) ? prev.filter(c => c !== ch) : [...prev, ch])
  }

  const handleCreate = () => {
    if (!name.trim()) { setError('Agent name is required'); return }
    if (channels.length === 0) { setError('Select at least one channel'); return }
    if (isCustom && !agentType.trim()) { setError('Agent type is required'); return }
    const initials = name.trim()[0].toUpperCase()
    const seq = String(Math.floor(Math.random() * 900) + 100)
    const slug = name.trim().toLowerCase().replace(/\s+/g, '-').slice(0, 12)
    onAdd({
      id: Date.now().toString(),
      agentId: `AGT-${seq}`,
      mailbox: `${slug}-${seq}@kael.cx`,
      name: name.trim(),
      initials,
      type: agentType,
      model,
      status: 'draft',
      channels,
      conversations: 0,
      lastActive: 'Never',
      csat: '—',
      hidden: false,
      color: AVATAR_COLORS[Math.floor(Math.random() * AVATAR_COLORS.length)],
    })
    onClose()
  }

  const tpl = TEMPLATES.find(t => t.id === template)

  return (
    <>
      <div className="fixed inset-0 z-50 bg-black/30" onClick={onClose} />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="w-full max-w-lg rounded-2xl border border-slate-200 dark:border-slate-700/40 bg-white dark:bg-[#16142A] shadow-xl" onClick={e => e.stopPropagation()}>
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700/40 px-5 py-4">
            <h2 className="text-base font-semibold text-slate-700 dark:text-slate-200">
              {step === 'template' ? 'Choose agent skill' : isCustom ? 'Build custom agent' : `Configure ${tpl?.label}`}
            </h2>
            <button onClick={onClose} className="rounded-lg p-1 text-slate-400 transition hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-600 dark:hover:text-slate-200">
              <X size={18} />
            </button>
          </div>

          <div className="px-5 py-5">
            {step === 'template' ? (
              <>
                <p className="mb-3 text-xs text-slate-400">Pick a skill to pre-fill type and channels, or start custom.</p>
                <div className="max-h-[400px] space-y-1.5 overflow-y-auto pr-1">
                  {TEMPLATES.map(t => (
                    <button
                      key={t.id}
                      onClick={() => selectTemplate(t.id)}
                      className={`group flex w-full items-center gap-3 rounded-xl border px-3.5 py-3 text-left transition hover:border-violet-300 dark:hover:border-violet-500/40 hover:bg-violet-50/50 dark:hover:bg-violet-500/5 ${
                        t.id === 'custom' ? 'border-dashed border-slate-300 dark:border-slate-600' : 'border-slate-200 dark:border-slate-700/40'
                      }`}
                    >
                      <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition group-hover:bg-violet-100 dark:group-hover:bg-violet-500/15 group-hover:text-violet-600 dark:group-hover:text-violet-400 ${
                        t.id === 'custom' ? 'bg-violet-50 dark:bg-violet-500/10 text-violet-500 dark:text-violet-400' : 'bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400'
                      }`}>
                        <t.icon size={16} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[13px] font-medium text-slate-700 dark:text-slate-200">{t.label}</p>
                        <p className="text-[11px] text-slate-400">{t.desc}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className="space-y-4">
                {!isCustom && (
                  <div className="flex items-center gap-2.5 rounded-xl bg-violet-50 dark:bg-violet-500/10 px-3.5 py-2.5">
                    {tpl && <tpl.icon size={16} className="text-violet-600 dark:text-violet-400" />}
                    <p className="text-xs text-violet-700 dark:text-violet-300">
                      <span className="font-medium">{tpl?.label}</span> — pre-filled. Adjust below.
                    </p>
                  </div>
                )}

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-600 dark:text-slate-300">Agent name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={e => { setName(e.target.value); setError('') }}
                    placeholder={isCustom ? 'e.g. Returns Handler' : ''}
                    className="w-full rounded-xl border border-slate-200 dark:border-slate-700/40 bg-white dark:bg-white/5 px-3.5 py-2.5 text-sm text-slate-700 dark:text-slate-200 placeholder:text-slate-300 dark:placeholder:text-slate-600 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-100 dark:focus:ring-violet-500/20"
                    autoFocus
                  />
                </div>

                {isCustom && (
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-600 dark:text-slate-300">Agent type</label>
                    <input
                      type="text"
                      value={agentType}
                      onChange={e => { setAgentType(e.target.value); setError('') }}
                      placeholder="e.g. Customer Support, Lead Qualification"
                      className="w-full rounded-xl border border-slate-200 dark:border-slate-700/40 bg-white dark:bg-white/5 px-3.5 py-2.5 text-sm text-slate-700 dark:text-slate-200 placeholder:text-slate-300 dark:placeholder:text-slate-600 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-100 dark:focus:ring-violet-500/20"
                    />
                  </div>
                )}

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-600 dark:text-slate-300">Model</label>
                  <div className="flex gap-2">
                    {MODEL_OPTIONS.map(m => (
                      <button
                        key={m}
                        type="button"
                        onClick={() => setModel(m)}
                        className={`rounded-lg border px-3 py-1.5 font-mono text-[11px] transition ${
                          model === m
                            ? 'border-violet-400 bg-violet-50 dark:bg-violet-500/10 text-violet-700 dark:text-violet-400'
                            : 'border-slate-200 dark:border-slate-700/40 text-slate-500 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-600'
                        }`}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-600 dark:text-slate-300">Channels</label>
                  <div className="flex flex-wrap gap-2">
                    {CHANNEL_OPTIONS.map(ch => (
                      <button
                        key={ch}
                        type="button"
                        onClick={() => { toggleChannel(ch); setError('') }}
                        className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                          channels.includes(ch)
                            ? 'border-violet-400 bg-violet-50 dark:bg-violet-500/10 text-violet-700 dark:text-violet-400'
                            : 'border-slate-200 dark:border-slate-700/40 text-slate-500 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-600'
                        }`}
                      >
                        {ch}
                      </button>
                    ))}
                  </div>
                </div>

                {error && <p className="text-sm text-red-500">{error}</p>}
              </div>
            )}
          </div>

          <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-700/40 px-5 py-3.5">
            {step === 'details' ? (
              <>
                <button
                  onClick={() => { setStep('template'); setTemplate(''); setError('') }}
                  className="text-sm text-slate-400 transition hover:text-slate-600 dark:hover:text-slate-200"
                >
                  Back
                </button>
                <button
                  onClick={handleCreate}
                  className="flex items-center gap-1.5 rounded-full bg-violet-500 px-5 py-2 text-sm font-medium text-white transition hover:bg-violet-600"
                >
                  <Plus size={15} /> Create Agent
                </button>
              </>
            ) : (
              <>
                <div />
                <button onClick={onClose} className="text-sm text-slate-400 transition hover:text-slate-600 dark:hover:text-slate-200">Cancel</button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

function ConfigureAgentModal({ agent, onClose, onSave }: { agent: Agent; onClose: () => void; onSave: (updated: Agent) => void }) {
  const [name, setName] = useState(agent.name)
  const [agentType, setAgentType] = useState(agent.type)
  const [model, setModel] = useState(agent.model)
  const [channels, setChannels] = useState<string[]>([...agent.channels])
  const [error, setError] = useState('')

  const toggleChannel = (ch: string) => {
    setChannels(prev => prev.includes(ch) ? prev.filter(c => c !== ch) : [...prev, ch])
  }

  const handleSave = () => {
    if (!name.trim()) { setError('Agent name is required'); return }
    if (channels.length === 0) { setError('Select at least one channel'); return }
    if (!agentType.trim()) { setError('Agent type is required'); return }
    onSave({
      ...agent,
      name: name.trim(),
      initials: name.trim()[0].toUpperCase(),
      type: agentType.trim(),
      model,
      channels,
    })
    onClose()
  }

  return (
    <>
      <div className="fixed inset-0 z-50 bg-black/30" onClick={onClose} />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="w-full max-w-lg rounded-2xl border border-slate-200 dark:border-slate-700/40 bg-white dark:bg-[#16142A] shadow-xl" onClick={e => e.stopPropagation()}>
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700/40 px-5 py-4">
            <h2 className="text-base font-semibold text-slate-700 dark:text-slate-200">Configure Agent</h2>
            <button onClick={onClose} className="rounded-lg p-1 text-slate-400 transition hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-600 dark:hover:text-slate-200">
              <X size={18} />
            </button>
          </div>

          <div className="px-5 py-5 space-y-4">
            <div className="flex items-center gap-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] px-4 py-3">
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-bold text-white ${agent.color}`}>
                {agent.initials}
              </div>
              <div>
                <p className="font-mono text-[11px] font-semibold text-slate-500 dark:text-slate-300">{agent.agentId}</p>
                <p className="font-mono text-[11px] text-violet-500 dark:text-violet-400">{agent.mailbox}</p>
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-600 dark:text-slate-300">Agent name</label>
              <input
                type="text"
                value={name}
                onChange={e => { setName(e.target.value); setError('') }}
                className="w-full rounded-xl border border-slate-200 dark:border-slate-700/40 bg-white dark:bg-white/5 px-3.5 py-2.5 text-sm text-slate-700 dark:text-slate-200 placeholder:text-slate-300 dark:placeholder:text-slate-600 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-100 dark:focus:ring-violet-500/20"
                autoFocus
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-600 dark:text-slate-300">Agent type</label>
              <input
                type="text"
                value={agentType}
                onChange={e => { setAgentType(e.target.value); setError('') }}
                className="w-full rounded-xl border border-slate-200 dark:border-slate-700/40 bg-white dark:bg-white/5 px-3.5 py-2.5 text-sm text-slate-700 dark:text-slate-200 placeholder:text-slate-300 dark:placeholder:text-slate-600 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-100 dark:focus:ring-violet-500/20"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-600 dark:text-slate-300">Model</label>
              <div className="flex gap-2">
                {MODEL_OPTIONS.map(m => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setModel(m)}
                    className={`rounded-lg border px-3 py-1.5 font-mono text-[11px] transition ${
                      model === m
                        ? 'border-violet-400 bg-violet-50 dark:bg-violet-500/10 text-violet-700 dark:text-violet-400'
                        : 'border-slate-200 dark:border-slate-700/40 text-slate-500 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-600'
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-600 dark:text-slate-300">Channels</label>
              <div className="flex flex-wrap gap-2">
                {CHANNEL_OPTIONS.map(ch => (
                  <button
                    key={ch}
                    type="button"
                    onClick={() => { toggleChannel(ch); setError('') }}
                    className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                      channels.includes(ch)
                        ? 'border-violet-400 bg-violet-50 dark:bg-violet-500/10 text-violet-700 dark:text-violet-400'
                        : 'border-slate-200 dark:border-slate-700/40 text-slate-500 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-600'
                    }`}
                  >
                    {ch}
                  </button>
                ))}
              </div>
            </div>

            {error && <p className="text-sm text-red-500">{error}</p>}
          </div>

          <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-700/40 px-5 py-3.5">
            <button
              onClick={onClose}
              className="text-sm text-slate-400 transition hover:text-slate-600 dark:hover:text-slate-200"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="flex items-center gap-1.5 rounded-full bg-violet-500 px-5 py-2 text-sm font-medium text-white transition hover:bg-violet-600"
            >
              <Settings2 size={15} /> Save Changes
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

function AgentContextMenu({ agent, onAction, onClose }: { agent: Agent; onAction: (action: string) => void; onClose: () => void }) {
  const actions = [
    ...(agent.status === 'active' || agent.status === 'idle'
      ? [{ id: 'pause', icon: Pause, label: 'Pause Agent', color: 'text-slate-600 dark:text-slate-300' }]
      : []),
    ...(agent.status === 'offline'
      ? [{ id: 'wake', icon: Power, label: 'Wake Agent', color: 'text-slate-600 dark:text-slate-300' }]
      : []),
    ...(agent.status === 'draft'
      ? [{ id: 'deploy', icon: Play, label: 'Deploy Agent', color: 'text-emerald-600 dark:text-emerald-400' }]
      : []),
    { id: 'duplicate', icon: Copy, label: 'Duplicate', color: 'text-slate-600 dark:text-slate-300' },
    { id: 'configure', icon: Settings2, label: 'Configure', color: 'text-slate-600 dark:text-slate-300' },
    ...(agent.hidden
      ? [{ id: 'show', icon: Eye, label: 'Show Agent', color: 'text-slate-600 dark:text-slate-300' }]
      : [{ id: 'hide', icon: EyeOff, label: 'Hide Agent', color: 'text-slate-600 dark:text-slate-300' }]),
    { id: 'retire', icon: Trash2, label: 'Retire Agent', color: 'text-red-500' },
  ]

  return (
    <>
      <div className="fixed inset-0 z-40" onClick={onClose} />
      <div className="absolute right-0 top-full z-50 mt-1 w-44 rounded-xl border border-slate-200 dark:border-slate-700/40 bg-white dark:bg-[#1C1A33] py-1 shadow-lg">
        {actions.map(action => (
          <button
            key={action.id}
            onClick={() => { onAction(action.id); onClose() }}
            className={`flex w-full items-center gap-2.5 px-3.5 py-2 text-[13px] transition hover:bg-slate-50 dark:hover:bg-white/5 ${action.color}`}
          >
            <action.icon size={14} />
            {action.label}
          </button>
        ))}
      </div>
    </>
  )
}

function AgentCard({ agent, onAction }: { agent: Agent; onAction: (id: string, action: string) => void }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const cfg = statusConfig[agent.status]

  return (
    <div className="relative rounded-xl border border-slate-200 dark:border-slate-700/40 bg-white dark:bg-[#16142A] p-4 transition hover:shadow-sm">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2.5">
          <div className={`flex h-9 w-9 items-center justify-center rounded-lg text-[11px] font-bold text-white ${agent.color}`}>
            {agent.initials}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-[13px] font-semibold text-slate-700 dark:text-slate-200">{agent.name}</h3>
            </div>
            <p className="font-mono text-[10px] text-slate-400">{agent.type.length > 28 ? agent.type.slice(0, 28) + '…' : agent.type} · {agent.model}</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <span className={`flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium ${cfg.badge}`}>
            <span className={`h-1.5 w-1.5 rounded-full ${cfg.dot} ${cfg.animate ? 'animate-pulse' : ''}`} />
            {cfg.label}
          </span>
        </div>
      </div>

      <div className="mt-2.5 flex items-center gap-3 rounded-lg bg-slate-50 dark:bg-white/[0.03] px-3 py-2">
        <span className="font-mono text-[10px] text-slate-400">
          <span className="font-semibold text-slate-500 dark:text-slate-300">{agent.agentId}</span>
        </span>
        <span className="h-3 w-px bg-slate-200 dark:bg-slate-700" />
        <span className="truncate font-mono text-[10px] text-violet-500 dark:text-violet-400">{agent.mailbox}</span>
      </div>

      <div className="mt-2.5 flex flex-wrap gap-1">
        {agent.channels.map(ch => (
          <span key={ch} className="rounded-full bg-slate-100 dark:bg-white/5 px-2 py-0.5 text-[10px] font-medium text-slate-500 dark:text-slate-400">{ch}</span>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-between border-t border-slate-100 dark:border-slate-700/40 pt-3">
        <div className="flex items-center gap-3">
          {agent.conversations > 0 && (
            <span className="text-[11px] text-slate-400">
              <span className="font-medium text-slate-600 dark:text-slate-300">{agent.conversations.toLocaleString()}</span> convos
            </span>
          )}
          {agent.csat !== '—' && (
            <span className="text-[11px] text-slate-400">
              <span className="font-medium text-slate-600 dark:text-slate-300">{agent.csat}</span> CSAT
            </span>
          )}
        </div>
        <span className="text-[10px] text-slate-400">{agent.lastActive}</span>
      </div>

      <div className="relative mt-3 flex items-center gap-1.5">
        {agent.status === 'offline' && (
          <button
            onClick={() => onAction(agent.id, 'wake')}
            className="flex flex-1 items-center justify-center gap-1 rounded-lg border border-slate-200 dark:border-slate-700/40 py-1.5 text-[11px] font-medium text-slate-600 dark:text-slate-300 transition hover:bg-slate-50 dark:hover:bg-white/5"
          >
            <Power size={12} /> Wake
          </button>
        )}
        {agent.status === 'draft' && (
          <button
            onClick={() => onAction(agent.id, 'deploy')}
            className="flex flex-1 items-center justify-center gap-1 rounded-lg border border-emerald-200 dark:border-emerald-500/30 bg-emerald-50 dark:bg-emerald-500/10 py-1.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400 transition hover:bg-emerald-100 dark:hover:bg-emerald-500/20"
          >
            <Play size={12} /> Deploy
          </button>
        )}
        {(agent.status === 'active' || agent.status === 'idle') && (
          <>
            <button
              onClick={() => onAction(agent.id, 'pause')}
              className="flex flex-1 items-center justify-center gap-1 rounded-lg border border-amber-200 dark:border-amber-500/30 bg-amber-50 dark:bg-amber-500/10 py-1.5 text-[11px] font-medium text-amber-600 dark:text-amber-400 transition hover:bg-amber-100 dark:hover:bg-amber-500/20"
            >
              <Pause size={12} /> Pause
            </button>
          </>
        )}
        <button
          onClick={() => onAction(agent.id, 'duplicate')}
          className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700/40 text-slate-400 transition hover:bg-slate-50 dark:hover:bg-white/5 hover:text-slate-600 dark:hover:text-slate-200"
        >
          <Copy size={12} />
        </button>
        <div className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700/40 text-slate-400 transition hover:bg-slate-50 dark:hover:bg-white/5 hover:text-slate-600 dark:hover:text-slate-200"
          >
            <MoreHorizontal size={14} />
          </button>
          {menuOpen && <AgentContextMenu agent={agent} onAction={a => onAction(agent.id, a)} onClose={() => setMenuOpen(false)} />}
        </div>
      </div>
    </div>
  )
}

function TableView({ agents, onAction }: { agents: Agent[]; onAction: (id: string, action: string) => void }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700/40 bg-white dark:bg-[#16142A]">
      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-100 dark:border-slate-700/40 bg-slate-50/50 dark:bg-white/[0.02]">
            <th className="px-4 py-2.5 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-400">Agent</th>
            <th className="px-4 py-2.5 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-400">Status</th>
            <th className="px-4 py-2.5 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-400">Model</th>
            <th className="px-4 py-2.5 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-400">Channels</th>
            <th className="px-4 py-2.5 text-right text-[11px] font-semibold uppercase tracking-wider text-slate-400">Convos</th>
            <th className="px-4 py-2.5 text-right text-[11px] font-semibold uppercase tracking-wider text-slate-400">CSAT</th>
            <th className="px-4 py-2.5 text-right text-[11px] font-semibold uppercase tracking-wider text-slate-400">Last Active</th>
            <th className="px-4 py-2.5"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 dark:divide-slate-700/40">
          {agents.map(agent => {
            const cfg = statusConfig[agent.status]
            return (
              <tr key={agent.id} className="transition hover:bg-slate-50/50 dark:hover:bg-white/[0.02]">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2.5">
                    <div className={`flex h-7 w-7 items-center justify-center rounded-lg text-[10px] font-bold text-white ${agent.color}`}>
                      {agent.initials}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-[13px] font-medium text-slate-700 dark:text-slate-200">{agent.name}</p>
                        <span className="font-mono text-[9px] text-slate-400 dark:text-slate-500">{agent.agentId}</span>
                      </div>
                      <p className="text-[10px] text-slate-400">{agent.type}</p>
                      <p className="font-mono text-[10px] text-violet-500 dark:text-violet-400">{agent.mailbox}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium ${cfg.badge}`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${cfg.dot} ${cfg.animate ? 'animate-pulse' : ''}`} />
                    {cfg.label}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400">{agent.model}</span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap gap-1">
                    {agent.channels.map(ch => (
                      <span key={ch} className="rounded-full bg-slate-100 dark:bg-white/5 px-2 py-0.5 text-[10px] font-medium text-slate-500 dark:text-slate-400">{ch}</span>
                    ))}
                  </div>
                </td>
                <td className="px-4 py-3 text-right text-[13px] font-medium text-slate-700 dark:text-slate-200">
                  {agent.conversations > 0 ? agent.conversations.toLocaleString() : '—'}
                </td>
                <td className="px-4 py-3 text-right text-[13px] font-medium text-slate-700 dark:text-slate-200">{agent.csat}</td>
                <td className="px-4 py-3 text-right text-[11px] text-slate-400">{agent.lastActive}</td>
                <td className="px-4 py-3 text-right">
                  <div className="flex items-center justify-end gap-1">
                    {agent.status === 'offline' && (
                      <button onClick={() => onAction(agent.id, 'wake')} className="flex h-7 items-center gap-1 rounded-lg px-2 text-[11px] font-medium text-slate-500 dark:text-slate-400 transition hover:bg-slate-100 dark:hover:bg-white/5">
                        <Power size={12} /> Wake
                      </button>
                    )}
                    {agent.status === 'draft' && (
                      <button onClick={() => onAction(agent.id, 'deploy')} className="flex h-7 items-center gap-1 rounded-lg px-2 text-[11px] font-medium text-emerald-600 dark:text-emerald-400 transition hover:bg-emerald-50 dark:hover:bg-emerald-500/10">
                        <Play size={12} /> Deploy
                      </button>
                    )}
                    {(agent.status === 'active' || agent.status === 'idle') && (
                      <button onClick={() => onAction(agent.id, 'pause')} className="flex h-7 items-center gap-1 rounded-lg px-2 text-[11px] font-medium text-amber-600 dark:text-amber-400 transition hover:bg-amber-50 dark:hover:bg-amber-500/10">
                        <Pause size={12} /> Pause
                      </button>
                    )}
                    <button onClick={() => onAction(agent.id, 'duplicate')} className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 dark:hover:bg-white/5">
                      <Copy size={12} />
                    </button>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default function AgentsPage() {
  const [agents, setAgents] = useState<Agent[]>(INITIAL_AGENTS)
  const [filter, setFilter] = useState<'all' | 'active' | 'idle' | 'offline' | 'draft'>('all')
  const [view, setView] = useState<'cards' | 'table'>('cards')
  const [showAdd, setShowAdd] = useState(false)
  const [showHidden, setShowHidden] = useState(false)
  const [configAgent, setConfigAgent] = useState<Agent | null>(null)

  const visibleAgents = agents.filter(a => showHidden || !a.hidden)
  const filtered = filter === 'all' ? visibleAgents : visibleAgents.filter(a => a.status === filter)

  const activeCount = agents.filter(a => a.status === 'active').length
  const idleCount = agents.filter(a => a.status === 'idle').length
  const heartbeats = activeCount + idleCount
  const hiddenCount = agents.filter(a => a.hidden).length

  const addAgent = (agent: Agent) => setAgents(prev => [agent, ...prev])
  const saveAgent = (updated: Agent) => setAgents(prev => prev.map(a => a.id === updated.id ? updated : a))

  const handleAction = (id: string, action: string) => {
    setAgents(prev => prev.map(a => {
      if (a.id !== id) return a
      switch (action) {
        case 'wake':
        case 'deploy':
          return { ...a, status: 'active' as const, lastActive: 'Just now' }
        case 'pause':
          return { ...a, status: 'offline' as const, lastActive: 'Just now' }
        case 'hide':
          return { ...a, hidden: true }
        case 'show':
          return { ...a, hidden: false }
        case 'duplicate': {
          const dupSeq = String(Math.floor(Math.random() * 900) + 100)
          const dupSlug = a.name.toLowerCase().replace(/\s+/g, '-').slice(0, 12)
          const dup: Agent = { ...a, id: Date.now().toString(), agentId: `AGT-${dupSeq}`, mailbox: `${dupSlug}-${dupSeq}@kael.cx`, name: a.name + ' (copy)', status: 'draft' as const, conversations: 0, lastActive: 'Never', csat: '—' }
          setAgents(p => [dup, ...p])
          return a
        }
        case 'configure':
          setConfigAgent(a)
          return a
        case 'retire':
          return { ...a, status: 'offline' as const, hidden: true, lastActive: 'Retired' }
        default:
          return a
      }
    }))
  }

  return (
    <div>
      {showAdd && <AddAgentModal onClose={() => setShowAdd(false)} onAdd={addAgent} />}
      {configAgent && <ConfigureAgentModal agent={configAgent} onClose={() => setConfigAgent(null)} onSave={saveAgent} />}

      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold text-slate-700 dark:text-slate-200">Agent Squad</h1>
            <div className="flex items-center gap-2 text-[12px] text-slate-400">
              <span className="flex items-center gap-1">
                <Wifi size={12} className="text-emerald-500" />
                {agents.filter(a => !a.hidden).length}
              </span>
              <span className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {heartbeats} active heartbeat{heartbeats !== 1 ? 's' : ''}
              </span>
            </div>
          </div>
          <p className="mt-1 text-sm text-slate-400">Monitor status, configure models, and manage the agent lifecycle.</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-slate-700/40 bg-white dark:bg-[#16142A] px-3 py-2 text-[12px] font-medium text-slate-600 dark:text-slate-300 transition hover:bg-slate-50 dark:hover:bg-white/5">
            <Radio size={13} className="text-emerald-500" /> Live
          </button>
          <button className="flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-slate-700/40 bg-white dark:bg-[#16142A] px-3 py-2 text-[12px] font-medium text-slate-600 dark:text-slate-300 transition hover:bg-slate-50 dark:hover:bg-white/5">
            <RefreshCw size={13} /> Sync
          </button>
          <button
            onClick={() => setShowHidden(!showHidden)}
            className={`flex items-center gap-1.5 rounded-lg border px-3 py-2 text-[12px] font-medium transition ${
              showHidden ? 'border-violet-300 dark:border-violet-500/40 bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400' : 'border-slate-200 dark:border-slate-700/40 bg-white dark:bg-[#16142A] text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5'
            }`}
          >
            {showHidden ? <Eye size={13} /> : <EyeOff size={13} />}
            Hidden {hiddenCount > 0 && `(${hiddenCount})`}
          </button>
          <button
            onClick={() => setShowAdd(true)}
            className="flex items-center gap-1.5 rounded-lg bg-violet-500 px-3.5 py-2 text-[12px] font-medium text-white transition hover:bg-violet-600"
          >
            <Plus size={14} /> Add Agent
          </button>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <div className="flex gap-1.5">
          {(['all', 'active', 'idle', 'offline', 'draft'] as const).map(f => {
            const count = f === 'all' ? visibleAgents.length : visibleAgents.filter(a => a.status === f).length
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-3.5 py-1.5 text-[11px] font-medium capitalize transition ${
                  filter === f
                    ? 'bg-violet-100 dark:bg-violet-500/15 text-violet-700 dark:text-violet-400'
                    : 'bg-white dark:bg-transparent text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-slate-600 dark:hover:text-slate-300'
                }`}
              >
                {f} <span className="ml-0.5 text-[10px]">({count})</span>
              </button>
            )
          })}
        </div>

        <div className="flex items-center gap-0.5 rounded-lg border border-slate-200 dark:border-slate-700/40 bg-white dark:bg-[#16142A] p-0.5">
          <button
            onClick={() => setView('cards')}
            className={`flex h-7 w-7 items-center justify-center rounded-md transition ${
              view === 'cards' ? 'bg-violet-100 dark:bg-violet-500/15 text-violet-600 dark:text-violet-400' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
            }`}
          >
            <LayoutGrid size={15} />
          </button>
          <button
            onClick={() => setView('table')}
            className={`flex h-7 w-7 items-center justify-center rounded-md transition ${
              view === 'table' ? 'bg-violet-100 dark:bg-violet-500/15 text-violet-600 dark:text-violet-400' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
            }`}
          >
            <List size={15} />
          </button>
        </div>
      </div>

      <div className="mt-5">
        {view === 'cards' ? (
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {filtered.map(agent => (
              <AgentCard key={agent.id} agent={agent} onAction={handleAction} />
            ))}
          </div>
        ) : (
          <TableView agents={filtered} onAction={handleAction} />
        )}
      </div>
    </div>
  )
}
