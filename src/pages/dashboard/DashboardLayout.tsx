import { useState, useRef, useEffect } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import {
  LayoutDashboard, Bot, ListChecks, Activity, Settings,
  LogOut, ChevronDown, ChevronLeft, ChevronRight, Menu,
  House, Bell, User, BookOpen, Sun, Moon,
} from 'lucide-react'
import KaelLogo from '../../components/KaelLogo'
import { useTheme } from '../../hooks/useTheme'

const TOP_NAV = [
  { to: '/app', icon: House, label: 'Home', end: true as const },
  { to: '/app/dashboard', icon: LayoutDashboard, label: 'Dashboard', end: false as const },
]

const NAV_ITEMS = [
  { to: '/app/agents', icon: Bot, label: 'Agents' },
  { to: '/app/tasks', icon: ListChecks, label: 'Tasks' },
  { to: '/app/activity', icon: Activity, label: 'Activity' },
  { to: '/app/settings', icon: Settings, label: 'Settings' },
]

export default function DashboardLayout() {
  const navigate = useNavigate()
  const { theme, toggle } = useTheme()
  const [collapsed, setCollapsed] = useState(true)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const linkClass = (isActive: boolean) =>
    `flex items-center rounded-xl transition-all group relative ${
      collapsed ? 'justify-center p-3' : 'gap-3 px-4 py-3'
    } ${
      isActive
        ? 'bg-violet-500 text-white shadow-[0_2px_8px_rgba(139,92,246,0.35)]'
        : 'text-slate-500 dark:text-slate-400 hover:bg-white dark:hover:bg-white/5 hover:text-slate-700 dark:hover:text-slate-200'
    }`

  return (
    <div className="flex h-screen overflow-hidden bg-white dark:bg-[#0F0E1A]">
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-black/30 lg:hidden" onClick={() => setMobileOpen(false)} />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex flex-col border-r border-slate-200 dark:border-slate-800 bg-[#F8F6FC] dark:bg-[#16142A] transition-all duration-200 lg:static lg:z-auto lg:h-full ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } ${collapsed ? 'w-[72px]' : 'w-[260px]'}`}
      >
        <div className={`flex flex-col items-center pb-4 pt-4 ${collapsed ? 'px-3' : 'px-6'}`}>
          <button
            onClick={() => { setCollapsed(!collapsed); setMobileOpen(false) }}
            className="mb-3 flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-400 transition-colors hover:border-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-600 dark:hover:text-slate-300"
          >
            {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </button>

          {collapsed ? (
            <div className="flex flex-col items-center gap-2">
              <img src="/kael-logo.png" alt="Kael" className="h-8" />
              <span className="text-[8px] font-bold uppercase tracking-[0.15em] text-violet-500/70 dark:text-violet-400/60">MC</span>
            </div>
          ) : (
            <>
              <KaelLogo className="h-9" />
              <span className="mt-2 rounded-full border border-violet-200/50 dark:border-violet-500/30 bg-violet-50 dark:bg-violet-500/10 px-3 py-0.5 text-[11px] font-semibold text-violet-700 dark:text-violet-400">
                Mission Control
              </span>
            </>
          )}
        </div>

        <nav className={`min-h-0 flex-1 overflow-y-auto py-4 ${collapsed ? 'px-2' : 'px-3'}`}>
          <div className="mb-2 space-y-1">
            {TOP_NAV.map(({ to, icon: Icon, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                onClick={() => setMobileOpen(false)}
                title={collapsed ? label : undefined}
                className={({ isActive }) => linkClass(isActive)}
              >
                <Icon className="h-5 w-5 shrink-0" />
                {!collapsed && <span className="text-sm font-medium">{label}</span>}
                {collapsed && (
                  <div className="pointer-events-none absolute left-full z-50 ml-3 whitespace-nowrap rounded-lg bg-slate-800 px-2.5 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                    {label}
                  </div>
                )}
              </NavLink>
            ))}
          </div>

          <div className={`my-2 border-t border-slate-200/60 dark:border-slate-700/60 ${collapsed ? 'mx-1' : 'mx-2'}`} />

          <div className="space-y-1">
            {NAV_ITEMS.map(({ to, icon: Icon, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setMobileOpen(false)}
                title={collapsed ? label : undefined}
                className={({ isActive }) => linkClass(isActive)}
              >
                <Icon className="h-5 w-5 shrink-0" />
                {!collapsed && <span className="text-sm font-medium">{label}</span>}
                {collapsed && (
                  <div className="pointer-events-none absolute left-full z-50 ml-3 whitespace-nowrap rounded-lg bg-slate-800 px-2.5 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                    {label}
                  </div>
                )}
              </NavLink>
            ))}
          </div>
        </nav>

        <div className={`shrink-0 ${collapsed ? 'px-2' : 'px-3'} mb-1`}>
          <NavLink
            to="/app/knowledge"
            onClick={() => setMobileOpen(false)}
            title={collapsed ? 'Knowledge Base' : undefined}
            className={({ isActive }) => linkClass(isActive)}
          >
            <BookOpen className="h-5 w-5 shrink-0" />
            {!collapsed && <span className="text-sm font-medium">Knowledge Base</span>}
            {collapsed && (
              <div className="pointer-events-none absolute left-full z-50 ml-3 whitespace-nowrap rounded-lg bg-slate-800 px-2.5 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                Knowledge Base
              </div>
            )}
          </NavLink>
        </div>

        {/* Theme toggle */}
        <div className={`shrink-0 ${collapsed ? 'px-2' : 'px-3'} mb-1`}>
          <button
            onClick={toggle}
            title={collapsed ? (theme === 'dark' ? 'Light mode' : 'Dark mode') : undefined}
            className={`group relative flex w-full items-center rounded-xl text-slate-500 dark:text-slate-400 transition-all hover:bg-white dark:hover:bg-white/5 hover:text-slate-700 dark:hover:text-slate-200 ${
              collapsed ? 'justify-center p-3' : 'gap-3 px-4 py-3'
            }`}
          >
            {theme === 'dark' ? <Sun className="h-5 w-5 shrink-0" /> : <Moon className="h-5 w-5 shrink-0" />}
            {!collapsed && <span className="text-sm font-medium">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>}
            {collapsed && (
              <div className="pointer-events-none absolute left-full z-50 ml-3 whitespace-nowrap rounded-lg bg-slate-800 px-2.5 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </div>
            )}
          </button>
        </div>

        <div ref={dropdownRef} className={`relative shrink-0 border-t border-slate-200/60 dark:border-slate-700/60 ${collapsed ? 'px-2 py-3' : 'px-3 py-3'}`}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className={`group relative flex w-full items-center rounded-xl transition-colors hover:bg-white dark:hover:bg-white/5 ${
              collapsed ? 'justify-center p-2' : 'gap-3 px-3 py-2.5'
            }`}
          >
            <div className="relative shrink-0">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-500 text-sm font-semibold text-white">
                P
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white dark:border-[#16142A] bg-green-400" />
            </div>
            {!collapsed && (
              <>
                <div className="min-w-0 flex-1 text-left">
                  <p className="truncate text-sm font-medium text-slate-700 dark:text-slate-200">Priya</p>
                  <p className="truncate text-[11px] text-slate-400">priyamvada.s.m@gmail...</p>
                </div>
                <ChevronDown className={`h-4 w-4 shrink-0 text-slate-400 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </>
            )}
            {collapsed && (
              <div className="pointer-events-none absolute left-full z-50 ml-3 whitespace-nowrap rounded-lg bg-slate-800 px-2.5 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                Priya
              </div>
            )}
          </button>

          {dropdownOpen && (
            <div className={`absolute bottom-full z-50 mb-2 w-60 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1C1A33] py-1.5 shadow-lg ${
              collapsed ? 'left-full ml-2' : 'left-3 right-3 w-auto'
            }`}>
              <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-700 px-4 py-3">
                <div className="relative shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-500 text-sm font-semibold text-white">
                    P
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white dark:border-[#1C1A33] bg-green-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-slate-700 dark:text-slate-200">Priya</p>
                  <p className="truncate text-xs text-slate-400">priyamvada.s.m@...com</p>
                </div>
                <span className="flex shrink-0 items-center gap-1 text-xs font-medium text-green-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                  Online
                </span>
              </div>

              <div className="py-1">
                <button
                  onClick={() => { setDropdownOpen(false); navigate('/app/settings') }}
                  className="flex w-full items-center gap-3 px-4 py-2.5 text-sm text-slate-500 dark:text-slate-400 transition-colors hover:bg-slate-50 dark:hover:bg-white/5 hover:text-slate-700 dark:hover:text-slate-200"
                >
                  <User className="h-4 w-4" />
                  Profile
                </button>
                <button
                  onClick={() => { setDropdownOpen(false); navigate('/app/settings') }}
                  className="flex w-full items-center gap-3 px-4 py-2.5 text-sm text-slate-500 dark:text-slate-400 transition-colors hover:bg-slate-50 dark:hover:bg-white/5 hover:text-slate-700 dark:hover:text-slate-200"
                >
                  <Bell className="h-4 w-4" />
                  Notification settings
                </button>
              </div>

              <div className="border-t border-slate-100 dark:border-slate-700 pt-1">
                <button
                  onClick={() => { setDropdownOpen(false); navigate('/') }}
                  className="flex w-full items-center gap-3 px-4 py-2.5 text-sm text-red-500 transition-colors hover:bg-red-50 dark:hover:bg-red-500/10"
                >
                  <LogOut className="h-4 w-4" />
                  Sign out
                </button>
              </div>
            </div>
          )}
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col overflow-hidden bg-white dark:bg-[#0F0E1A]">
        <div className="px-4 py-3 lg:hidden">
          <button onClick={() => setMobileOpen(true)} className="p-1.5 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200">
            <Menu className="h-5 w-5" />
          </button>
        </div>

        <main className="flex-1 overflow-y-auto p-5 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
