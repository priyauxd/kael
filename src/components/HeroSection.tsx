import { motion } from 'framer-motion'

const useCases = [
  'Appointment booking — healthcare',
  'Compliance Q&A — insurance',
  'Billing dispute resolution — fintech app',
  'Lead qualification — B2B SaaS',
  'VIP escalation desk — airline',
]

function ConstellationBg() {
  const nodes = [
    { x: 680, y: 40, r: 3 }, { x: 820, y: 90, r: 2 }, { x: 950, y: 30, r: 2.5 },
    { x: 1050, y: 120, r: 3 }, { x: 1150, y: 60, r: 2 }, { x: 750, y: 180, r: 2 },
    { x: 900, y: 160, r: 3 }, { x: 1000, y: 220, r: 2 }, { x: 1120, y: 180, r: 2.5 },
    { x: 600, y: 300, r: 2 }, { x: 850, y: 280, r: 2.5 }, { x: 980, y: 320, r: 2 },
    { x: 1100, y: 300, r: 3 }, { x: 1200, y: 250, r: 2 }, { x: 700, y: 400, r: 2.5 },
    { x: 550, y: 200, r: 2 }, { x: 1250, y: 150, r: 2 }, { x: 650, y: 500, r: 3 },
    { x: 900, y: 450, r: 2 }, { x: 1050, y: 420, r: 2.5 }, { x: 1180, y: 380, r: 2 },
    { x: 800, y: 520, r: 2 }, { x: 950, y: 540, r: 3 }, { x: 1100, y: 500, r: 2 },
    { x: 500, y: 450, r: 2 }, { x: 350, y: 500, r: 2.5 }, { x: 200, y: 550, r: 2 },
    { x: 1250, y: 450, r: 2 }, { x: 400, y: 350, r: 2 },
  ]
  const edges = [
    [0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [1, 6], [2, 6], [3, 8], [4, 8],
    [5, 6], [6, 7], [7, 8], [5, 10], [6, 10], [7, 11], [8, 13], [9, 10],
    [10, 11], [11, 12], [12, 13], [9, 15], [10, 14], [11, 19], [12, 20],
    [14, 18], [15, 9], [0, 16], [4, 16], [14, 17], [17, 21], [18, 22],
    [19, 23], [21, 22], [22, 23], [17, 25], [25, 26], [24, 25], [9, 28],
    [28, 24], [20, 27], [13, 27], [3, 7],
  ]
  return (
    <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1400 600">
      <defs>
        <radialGradient id="node-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(156,145,236,0.6)" />
          <stop offset="100%" stopColor="rgba(156,145,236,0)" />
        </radialGradient>
      </defs>
      {edges.map(([a, b], i) => (
        <line key={i} x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y} stroke="rgba(139,125,238,0.08)" strokeWidth="0.8" />
      ))}
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r={n.r * 3} fill="url(#node-glow)" opacity="0.25" />
          <circle cx={n.x} cy={n.y} r={n.r} fill="rgba(189,181,242,0.35)" />
        </g>
      ))}
    </svg>
  )
}

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-950 via-indigo-900 to-indigo-800 pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/3 h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-violet-600/6 blur-[150px]" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[400px] rounded-full bg-sky-600/5 blur-[120px]" />
        <ConstellationBg />
      </div>

      <div className="relative mx-auto max-w-4xl px-6">
        <motion.p
          className="mb-6 flex items-center gap-2.5 text-xs font-medium tracking-[0.2em] text-violet-300/70 uppercase"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-violet-400/80" />
          Autonomous CX Agents
        </motion.p>

        <motion.h1
          className="max-w-2xl font-display text-[40px] font-bold leading-[1.1] text-white md:text-[56px]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
        >
          Agents for{' '}
          <span className="gradient-text">Contact Centers.</span>
        </motion.h1>

        <motion.p
          className="mt-6 max-w-lg text-[17px] leading-[1.7] text-slate-400"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Describe the CX team you need and KAEL deploys autonomous
          agents that answer, resolve and escalate — live across voice,
          chat and email in days, not quarters.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <a href="#" className="rounded-full bg-violet-500 px-8 py-3.5 text-[15px] font-medium text-white transition hover:bg-violet-600">
            Book a Demo
          </a>
          <button onClick={() => document.getElementById('mission-control')?.scrollIntoView({ behavior: 'smooth' })} className="rounded-full border border-white/15 px-8 py-3.5 text-[15px] font-medium text-white/90 transition hover:border-white/30 hover:text-white">
            See Mission Control
          </button>
        </motion.div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.55 }}
        >
          <p className="mb-4 text-[11px] font-medium tracking-[0.2em] text-slate-500/70 uppercase">
            Deployed this week
          </p>
          <div className="flex gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {useCases.map(uc => (
              <span
                key={uc}
                className="shrink-0 rounded-full border border-white/10 px-5 py-2.5 text-[13px] text-slate-300/80 transition hover:border-white/20 hover:text-white cursor-pointer"
              >
                {uc}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
