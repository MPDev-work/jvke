export default function SectionLabel({ index, label }) {
  return (
    <div className="flex items-center gap-3 text-xs font-medium tracking-[0.16em] uppercase">
      <span style={{ color: 'var(--accent)' }}>{index}</span>
      <span style={{ color: 'var(--text-muted)' }}>/</span>
      <span style={{ color: 'var(--text-muted)' }}>{label}</span>
    </div>
  );
}
