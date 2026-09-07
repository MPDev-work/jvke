const steps = [
  {
    number: '01',
    title: 'Plan',
    description:
      'Understand the problem and define the required functionality.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Create a clear interface and responsive layout.',
  },
  {
    number: '03',
    title: 'Build',
    description: 'Develop the frontend, backend, APIs, and data layer.',
  },
  {
    number: '04',
    title: 'Refine',
    description:
      'Test, improve performance, fix edge cases, and polish the interface.',
  },
];

export default function Process() {
  return (
    <section
      className="px-5 py-24 md:px-10 md:py-32"
      style={{ borderTop: '1px solid var(--line)' }}
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-x-10 gap-y-14 md:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="flex flex-col pt-6"
              style={{
                borderTop: `1px solid ${i === 0 ? 'var(--accent)' : 'var(--line)'}`,
              }}
            >
              <span
                className="text-xs font-medium tracking-[0.1em]"
                style={{ color: 'var(--accent)' }}
              >
                {step.number}
              </span>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
                {step.title}
              </h3>
              <p
                className="mt-3 text-sm leading-relaxed"
                style={{ color: 'var(--text-muted)' }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
