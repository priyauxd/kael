import { motion } from 'framer-motion'

export default function QuoteSection() {
  return (
    <section className="bg-indigo-900 py-24 md:py-32">
      <motion.div
        className="mx-auto max-w-3xl px-6 text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-[11px] font-medium tracking-[0.2em] text-violet-300/60 uppercase">
          Problem Brief
        </p>
        <blockquote className="mt-8 font-display text-[24px] font-bold leading-snug text-white md:text-[32px]">
          &ldquo;I need an agent that resolves billing disputes on the spot,
          and hands VIP escalations straight to a human — with the
          full thread attached.&rdquo;
        </blockquote>
        <div className="mt-10">
          <span className="inline-block rounded-full border border-violet-400/25 px-6 py-3 text-[13px] font-medium text-violet-200/80">
            Deploy as: Billing Resolution Agent + Escalation Router
          </span>
        </div>
      </motion.div>
    </section>
  )
}
