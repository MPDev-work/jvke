import { useState } from 'react';
import SectionLabel from './SectionLabel';
import { technologies } from '../data/technologies';

export default function TechStack() {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      id="stack"
      className="px-5 py-24 md:px-10 md:py-32"
      style={{ borderTop: '1px solid var(--line)' }}
    >
      <div className="mx-auto max-w-[1400px]">
        <SectionLabel index="03" label="Stack" />
        <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
          TOOLS I BUILD WITH.
        </h2>

        <ul className="mt-14" style={{ borderTop: '1px solid var(--line)' }}>
          {technologies.map((tech) => (
            <li
              key={tech.index}
              onMouseEnter={() => setHovered(tech.index)}
              onMouseLeave={() => setHovered(null)}
              className="flex cursor-default items-center justify-between py-5 transition-colors duration-500 ease-out md:py-6"
              style={{ borderBottom: '1px solid var(--line)' }}
            >
              <div className="flex items-baseline gap-5 md:gap-10">
                <span
                  className="text-xs font-medium tracking-[0.1em]"
                  style={{
                    color:
                      hovered === tech.index
                        ? 'var(--accent)'
                        : 'var(--text-faint)',
                  }}
                >
                  {tech.index}
                </span>
                <span
                  className="text-2xl font-semibold tracking-tight transition-colors duration-500 ease-out md:text-4xl"
                  style={{
                    color:
                      hovered === tech.index ? 'var(--accent)' : 'var(--text)',
                  }}
                >
                  {tech.name}
                </span>
              </div>
              <span
                className="hidden text-sm md:block"
                style={{
                  color: 'var(--text-muted)',
                  opacity: hovered === tech.index ? 1 : 0,
                  transition: 'opacity 500ms ease-out',
                }}
              >
                {tech.note}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
