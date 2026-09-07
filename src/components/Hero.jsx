import { ArrowDown } from 'lucide-react';

const metadata = [
  'Based in Cambodia',
  'Engineering Student',
  'Full Stack Development',
  '2026',
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-between px-5 pt-24 pb-10 md:px-10 md:pt-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(to right, var(--line) 1px, transparent 1px)',
          backgroundSize: 'calc(100% / 6) 100%',
        }}
      />

      <div className="relative grid gap-10 md:grid-cols-12">
        <div className="md:col-span-8">
          <p
            className="mb-6 text-xs font-medium tracking-[0.18em] uppercase"
            style={{ color: 'var(--text-muted)' }}
          >
            Software Engineer — Frontend Developer
          </p>
          <h1 className="text-[13vw] leading-[0.92] font-bold tracking-tight md:text-[6.4vw]">
            <span className="block">ENGINEER.</span>
            <span className="block" style={{ color: 'var(--accent)' }}>
              DEVELOPER.
            </span>
            <span className="block">BUILDER.</span>
          </h1>
        </div>

        <div className="flex flex-col justify-end gap-6 md:col-span-4">
          <p
            className="text-base leading-relaxed md:text-lg"
            style={{ color: 'var(--text-muted)' }}
          >
            I build thoughtful digital products with modern web technologies,
            combining engineering, interface design, and practical problem
            solving.
          </p>
          <div
            className="grid grid-cols-2 gap-x-4 gap-y-3 pt-4 text-[11px] font-medium tracking-[0.1em] uppercase"
            style={{
              borderTop: '1px solid var(--line)',
              color: 'var(--text-faint)',
            }}
          >
            {metadata.map((m) => (
              <span key={m} className="pt-3">
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="relative flex items-center justify-between pt-16">
        <span
          className="text-[11px] tracking-[0.14em] uppercase"
          style={{ color: 'var(--text-faint)' }}
        >
          Scroll to explore
        </span>
        <ArrowDown
          size={16}
          strokeWidth={1.5}
          className="animate-bounce"
          style={{ color: 'var(--accent)' }}
        />
      </div>
    </section>
  );
}
