export function Section({ id, variant = "info", children }) {
  return (
    <section id={id} className={`section section--${variant}`}>
      <div className="sectionInner">{children}</div>
    </section>
  );
}
