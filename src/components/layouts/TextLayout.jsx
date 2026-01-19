export function TextLayout({ title, subtitle, text, children }) {
  return (
    <div className="contentBox">
      {subtitle && <p className="sectionSubtitle">{subtitle}</p>}
      <h2 className="sectionTitle">{title}</h2>

      {text && <p className="sectionText">{text}</p>}

      {children}
    </div>
  );
}
