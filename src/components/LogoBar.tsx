const logos = ['Zendesk', 'Salesforce', 'Slack', 'WhatsApp', 'HubSpot', 'Twilio']

export default function LogoBar() {
  return (
    <section className="border-b border-slate-100 dark:border-slate-800 py-12">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="mb-10 text-[11px] font-medium tracking-[0.2em] text-slate-400 uppercase">
          Works with the stack you already run
        </p>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
          {logos.map(name => (
            <span key={name} className="text-[15px] font-medium text-slate-300 dark:text-slate-600 transition hover:text-violet-400 cursor-default">{name}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
