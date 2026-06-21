export default function KaelLogo({ className = 'h-8' }: { className?: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <img src={import.meta.env.BASE_URL + 'kael-logo.png'} alt="Kael" className={className} />
      <span className="font-display text-[22px] font-bold tracking-wide text-indigo-800 dark:text-white">KAEL</span>
    </div>
  )
}
