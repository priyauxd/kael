export default function CTASection() {
  return (
    <section className="bg-indigo-900 py-28 md:py-36">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-display text-[32px] font-bold leading-tight text-white md:text-[40px]">
          Your next CX hire doesn&apos;t have to be human.
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-[17px] leading-[1.7] text-slate-400">
          Book a 20-minute walkthrough and see KAEL handle a real conversation from your queue.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#" className="rounded-full bg-violet-500 px-8 py-3.5 text-[15px] font-medium text-white transition hover:bg-violet-600">
            Book a Mission Control Demo
          </a>
          <a href="#" className="rounded-full border border-white/15 px-8 py-3.5 text-[15px] font-medium text-white/90 transition hover:border-white/30 hover:text-white">
            Talk to Sales
          </a>
        </div>
      </div>
    </section>
  )
}
