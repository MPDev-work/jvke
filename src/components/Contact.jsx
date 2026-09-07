import { useState } from 'react';
import { Mail, Code2, Users, ArrowUpRight } from 'lucide-react';
import SectionLabel from './SectionLabel';

const contacts = [
  {
    label: 'Email',
    value: 'pisalmony.work@gmail.com',
    href: 'pisalmony.work@gmail.com',
    icon: Mail,
  },
  {
    label: 'GitHub',
    value: 'github.com/mpdev-work',
    href: 'https://github.com/mpdev-work',
    icon: Code2,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/jvke',
    href: 'https://linkedin.com/in/jvke',
    icon: Users,
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Project inquiry from ${form.name || 'your site'}`,
    );
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`,
    );
    window.location.href = `mailto:hello@jvke.dev?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="px-5 py-24 md:px-10 md:py-32"
      style={{ borderTop: '1px solid var(--line)' }}
    >
      <div className="mx-auto max-w-[1400px]">
        <SectionLabel index="04" label="Let's Build" />

        <div className="mt-10 grid gap-16 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-6">
            <h2 className="text-4xl font-bold leading-[1.02] tracking-tight md:text-6xl">
              LET'S
              <br />
              BUILD
              <br />
              <span style={{ color: 'var(--accent)' }}>SOMETHING.</span>
            </h2>
            <p
              className="mt-6 max-w-sm text-base leading-relaxed md:text-lg"
              style={{ color: 'var(--text-muted)' }}
            >
              Have an idea, project, or problem to solve? Let's build something
              useful.
            </p>

            <div
              className="mt-12 flex flex-col"
              style={{ borderTop: '1px solid var(--line)' }}
            >
              {contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.label === 'Email' ? undefined : '_blank'}
                  rel="noreferrer"
                  className="group flex items-center justify-between py-4 transition-colors duration-500 ease-out"
                  style={{ borderBottom: '1px solid var(--line)' }}
                >
                  <span className="flex items-center gap-3">
                    <c.icon
                      size={15}
                      strokeWidth={1.75}
                      style={{ color: 'var(--text-faint)' }}
                    />
                    <span className="text-sm font-medium">{c.value}</span>
                  </span>
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-500 ease-out group-hover:translate-x-1 group-hover:-translate-y-1"
                    style={{ color: 'var(--accent)' }}
                  />
                </a>
              ))}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 md:col-span-6"
          >
            <label className="flex flex-col gap-2">
              <span
                className="text-[11px] font-medium tracking-[0.14em] uppercase"
                style={{ color: 'var(--text-faint)' }}
              >
                Name
              </span>
              <input
                required
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="bg-transparent py-3 text-sm outline-none"
                style={{ borderBottom: '1px solid var(--line)' }}
              />
            </label>

            <label className="flex flex-col gap-2">
              <span
                className="text-[11px] font-medium tracking-[0.14em] uppercase"
                style={{ color: 'var(--text-faint)' }}
              >
                Email
              </span>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="bg-transparent py-3 text-sm outline-none"
                style={{ borderBottom: '1px solid var(--line)' }}
              />
            </label>

            <label className="flex flex-col gap-2">
              <span
                className="text-[11px] font-medium tracking-[0.14em] uppercase"
                style={{ color: 'var(--text-faint)' }}
              >
                Message
              </span>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="resize-none bg-transparent py-3 text-sm outline-none"
                style={{ borderBottom: '1px solid var(--line)' }}
              />
            </label>

            <button
              type="submit"
              className="mt-4 self-start px-6 py-3 text-xs font-semibold tracking-[0.1em] uppercase transition-transform duration-500 ease-out hover:-translate-y-0.5"
              style={{
                backgroundColor: 'var(--accent)',
                color: '#0a0a0a',
                borderRadius: '9999px',
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
