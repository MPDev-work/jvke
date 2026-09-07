import SectionLabel from './SectionLabel';

const index = [
  { label: 'Role', value: 'Engineer / Developer' },
  { label: 'Focus', value: 'Web Applications' },
  { label: 'Stack', value: 'React / Node / Laravel' },
  { label: 'Location', value: 'Cambodia' },
  { label: 'Status', value: 'Building and learning' },
];

export default function About() {
  return (
    <section
      id="about"
      className="px-5 py-24 md:px-10 md:py-32"
      style={{ borderTop: '1px solid var(--line)' }}
    >
      <div className="mx-auto max-w-[1400px]">
        <SectionLabel index="02" label="About" />

        <div className="mt-10 grid gap-14 md:grid-cols-12 md:gap-10">
          <h2 className="text-4xl font-bold leading-[1.05] tracking-tight md:col-span-7 md:text-6xl">
            ENGINEERING
            <br />
            MEETS <span style={{ color: 'var(--accent)' }}>INTERFACE.</span>
          </h2>

          <div className="md:col-span-5">
            <p
              className="text-base leading-relaxed md:text-lg"
              style={{ color: 'var(--text-muted)' }}
            >
              I'm an engineering student and developer who enjoys building
              practical software products — from responsive frontend interfaces
              to the APIs and backend systems behind them. My interests sit
              across frontend engineering, full-stack development, UI design,
              and developer tooling, and I like projects that force me to work
              through both the interface and the system underneath it.
            </p>

            <dl
              className="mt-10 flex flex-col"
              style={{ borderTop: '1px solid var(--line)' }}
            >
              {index.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between py-4"
                  style={{ borderBottom: '1px solid var(--line)' }}
                >
                  <dt
                    className="text-[11px] font-medium tracking-[0.14em] uppercase"
                    style={{ color: 'var(--text-faint)' }}
                  >
                    {item.label}
                  </dt>
                  <dd className="text-sm font-medium">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
