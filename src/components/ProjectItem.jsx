import { ArrowUpRight } from 'lucide-react';

const patterns = {
  '01': 'repeating-linear-gradient(115deg, #3a3a3a 0px, #3a3a3a 1px, transparent 1px, transparent 14px)',
  '02': 'repeating-linear-gradient(0deg, #3a3a3a 0px, #3a3a3a 1px, transparent 1px, transparent 18px)',
  '03': 'radial-gradient(circle at 30% 30%, #4a4a4a 0, #4a4a4a 1px, transparent 1px)',
  '04': 'repeating-linear-gradient(65deg, #3a3a3a 0px, #3a3a3a 1px, transparent 1px, transparent 22px)',
  '05': 'repeating-linear-gradient(90deg, #3a3a3a 0px, #3a3a3a 1px, transparent 1px, transparent 10px)',
  '06': 'repeating-linear-gradient(45deg, #3a3a3a 0px, #3a3a3a 1px, transparent 1px, transparent 16px)',
};

export default function ProjectItem({ project, large }) {
  return (
    <article
      className={`group relative flex w-full flex-col ${large ? 'md:w-[58%]' : 'md:w-[36%]'}`}
    >
      <div
        className="relative w-full overflow-hidden"
        style={{
          aspectRatio: large ? '16 / 10' : '4 / 5',
          backgroundColor: '#1c1c1c',
          backgroundImage: patterns[project.number],
          backgroundSize: project.number === '03' ? '16px 16px' : 'auto',
          borderRadius: '25px',
        }}
      >
        <div
          className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          style={{
            backgroundImage: patterns[project.number],
            backgroundSize: project.number === '03' ? '16px 16px' : 'auto',
          }}
        />
        <span
          className="absolute top-2.5 left-2.5 text-[11px] font-medium tracking-[0.1em]"
          style={{ color: 'rgba(255,255,255,0.5)' }}
        >
          {project.number}
        </span>
        <div
          className="absolute bottom-2.5 right-2.5 flex h-9 w-9 items-center justify-center opacity-0 transition-all duration-500 ease-out group-hover:opacity-100"
          style={{ backgroundColor: 'var(--accent)', borderRadius: '9999px' }}
        >
          <ArrowUpRight size={16} strokeWidth={2} color="#0a0a0a" />
        </div>
      </div>

      <div className="mt-5 flex items-start justify-between gap-6">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight transition-colors duration-500 ease-out group-hover:text-[var(--accent)] md:text-3xl">
            {project.title}
          </h3>
          <p
            className="mt-1 text-xs font-medium tracking-[0.1em] uppercase"
            style={{ color: 'var(--accent)' }}
          >
            {project.category}
          </p>
        </div>
      </div>

      <p
        className="mt-3 max-w-md text-sm leading-relaxed"
        style={{ color: 'var(--text-muted)' }}
      >
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
        {project.stack.map((s) => (
          <span
            key={s}
            className="text-[11px] font-medium tracking-[0.08em] uppercase"
            style={{ color: 'var(--text-faint)' }}
          >
            {s}
          </span>
        ))}
      </div>
    </article>
  );
}
