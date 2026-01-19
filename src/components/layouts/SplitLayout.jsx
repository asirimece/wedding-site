export function SplitLayout({ title, subtitle, text, image }) {
  return (
    <div className="contentBox contentBox--split">
      <div className="splitLeft">
        <h2 className="sectionTitle">{title}</h2>
        {subtitle && <p className="sectionSubtitle">{subtitle}</p>}

        {text &&
          text.split("\n").map((paragraph, i) => (
            <p key={i} className="sectionText">
              {paragraph.trim()}
            </p>
          ))}
      </div>

      <div className="splitRight">
        <img src={image} alt="" />
      </div>
    </div>
  );
}
