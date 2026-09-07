import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';

const links = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#stack', label: 'Stack' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('');

  useEffect(() => {
    const sections = links.map((l) => document.querySelector(l.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 h-14"
      style={{
        borderBottom: '1px solid var(--line)',
        backdropFilter: 'blur(14px)',
        backgroundColor: 'color-mix(in srgb, var(--bg) 82%, transparent)',
      }}
    >
      <div className="mx-auto flex h-full max-w-[1400px] items-center justify-between px-5 md:px-10">
        <a href="#top" className="text-sm font-semibold tracking-[0.08em]">
          JVKE
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-medium tracking-[0.14em] uppercase transition-colors duration-500 ease-out"
              style={{
                color:
                  active === l.href ? 'var(--accent)' : 'var(--text-muted)',
              }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <span
            className="hidden sm:flex items-center gap-2 text-[11px] tracking-[0.1em] uppercase"
            style={{ color: 'var(--text-muted)' }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: 'var(--accent)' }}
            />
            Available for work
          </span>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
