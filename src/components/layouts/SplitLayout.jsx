export function SplitLayout({ title, subtitle, text, image }) {

  const [ref, visible] = useInView();

  return (
      <div
        ref={ref}
        className={`contentBox contentBox--split scroll-animate ${visible ? "in-view" : ""}`}
      >

      <div className="splitLeft animate-slide-down delay-4">

        <h2 className="sectionTitle animate-slide-down delay-2">
          {title}
        </h2>

        {subtitle && (
          <p className="sectionSubtitle animate-slide-down delay-2">
            {subtitle}
          </p>
        )}

        {text &&
          text.split("\n").map((paragraph, i) => (
            <p key={i} className="sectionText">
              {paragraph.trim()}
            </p>
          ))}

      </div>

      <div className="splitRight animate-slide-up delay-3">
        <img src={image} alt="" />
      </div>

    </div>
  );
}
