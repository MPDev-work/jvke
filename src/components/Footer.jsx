export default function Footer() {
  return (
    <footer
      className="px-5 py-8 md:px-10"
      style={{ borderTop: '1px solid var(--line)' }}
    >
      <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <span
          className="text-xs font-medium tracking-[0.1em] uppercase"
          style={{ color: 'var(--text-faint)' }}
        >
          Jvke — Software Engineer / Developer
        </span>
        <span className="text-xs" style={{ color: 'var(--text-faint)' }}>
          © 2026
        </span>
      </div>
    </footer>
  );
}
