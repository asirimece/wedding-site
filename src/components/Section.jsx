export function Section({
  id,
  variant = "info",
  children,
  style,
  className = "",
  ...props
}) {
  return (
    <section
      id={id}
      className={`section section--${variant} ${className}`}
      style={style}
      {...props}
    >
      <div className="sectionInner">{children}</div>
    </section>
  );
}
