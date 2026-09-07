export default function StatementBanner() {
  return (
    <section
      className="flex min-h-[70vh] w-full flex-col items-start justify-center px-5 py-24 md:px-10"
      style={{ backgroundColor: 'var(--accent)' }}
    >
      <h2 className="text-[13vw] font-bold leading-[0.92] tracking-tight text-[#0a0a0a] md:text-[8vw]">
        BUILDING
        <br />
        DIGITAL
        <br />
        PRODUCTS.
      </h2>
      <p className="mt-8 text-lg font-medium tracking-tight text-[#0a0a0a] md:text-2xl">
        FROM IDEA TO
        <br />
        FUNCTIONAL SOFTWARE.
      </p>
    </section>
  );
}
