export function TextLayout({ title, subtitle, text, children }) {

  const [ref, visible] = useInView();

  return (
    <div
      ref={ref}
      className={`contentBox scroll-animate ${visible ? "in-view" : ""}`}
    >

      {subtitle && (
        <p className="sectionSubtitle animate-slide-down delay-2">
          {subtitle}
        </p>
      )}

      <h2 className="sectionTitle animate-slide-down delay-2">
        {title}
      </h2>

      {text && (
        <p className="sectionText animate-slide-down delay-4">
          {text}
        </p>
      )}

      {children}

    </div>
  );
}
