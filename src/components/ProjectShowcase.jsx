import SectionLabel from './SectionLabel';
import ProjectItem from './ProjectItem';
import { projects } from '../data/projects';

export default function ProjectShowcase() {
  return (
    <section id="work" className="px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <SectionLabel index="01" label="Selected Work" />
        <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
          SELECTED
          <br />
          PROJECTS.
        </h2>

        <div className="mt-20 flex flex-col gap-20 md:gap-28">
          {Array.from({ length: Math.ceil(projects.length / 2) }).map(
            (_, row) => {
              const pair = projects.slice(row * 2, row * 2 + 2);
              const flip = row % 2 === 1;
              return (
                <div
                  key={row}
                  className={`flex flex-col gap-16 md:justify-between md:gap-10 ${flip ? 'md:flex-row-reverse' : 'md:flex-row'}`}
                >
                  {pair.map((project) => (
                    <ProjectItem
                      key={project.number}
                      project={project}
                      large={project.size === 'large'}
                    />
                  ))}
                </div>
              );
            },
          )}
        </div>
      </div>
    </section>
  );
}
