import { useState } from "react";

function CTAButton({ cta }) {
  const className = `btn btn--${cta.variant ?? "primary"}`;
  const props = cta.external
    ? { href: cta.href, target: "_blank", rel: "noreferrer" }
    : { href: cta.href };

  return (
    <a className={className} {...props}>
      {cta.label}
    </a>
  );
}

function TimelineList({ items = [] }) {
  return (
    <ul className="list">
      {items.map((it, idx) => (
        <li key={idx} className="listItem">
          <div className="listRow">
            <div className="listTitle">{it.title}</div>
            {it.meta ? <div className="listMeta">{it.meta}</div> : null}
          </div>
          {it.detail ? <div className="listDetail">{it.detail}</div> : null}
        </li>
      ))}
    </ul>
  );
}

function FAQ({ items = [] }) {
  const [open, setOpen] = useState(null);

  return (
    <div className="faq">
      {items.map((it, idx) => {
        const isOpen = open === idx;
        return (
          <button
            key={idx}
            className={`faqItem ${isOpen ? "isOpen" : ""}`}
            onClick={() => setOpen(isOpen ? null : idx)}
            type="button"
          >
            <div className="faqQ">
              <span>{it.q}</span>
              <span className="faqIcon">{isOpen ? "–" : "+"}</span>
            </div>
            {isOpen ? <div className="faqA">{it.a}</div> : null}
          </button>
        );
      })}
    </div>
  );
}

export function InfoSection({
  title,
  subtitle,
  body,
  list,
  faq,
  ctas,
  map,
  frameVariant = "frame",
}) {
  return (
    <div className={`infoFrame infoFrame--${frameVariant}`}>
      <div className="infoContent">
        {title ? <h2 className="h2">{title}</h2> : null}
        {subtitle ? <p className="subtitle">{subtitle}</p> : null}

        {Array.isArray(body) ? (
          <div className="body">
            {body.map((line, i) => (
              <p key={i} className="p">
                {line}
              </p>
            ))}
          </div>
        ) : null}

        {Array.isArray(list) && list.length ? <TimelineList items={list} /> : null}
        {Array.isArray(faq) && faq.length ? <FAQ items={faq} /> : null}

        {map ? (
          <div className="mapBox">
            <img className="mapImg" src={map.image} alt={map.alt} loading="lazy" />
            <div className="mapActions">
              <a className="btn btn--secondary" href={map.openHref} target="_blank" rel="noreferrer">
                {map.openLabel}
              </a>
            </div>
            {map.note ? <p className="note">{map.note}</p> : null}
          </div>
        ) : null}

        {Array.isArray(ctas) && ctas.length ? (
          <div className="ctaRow">
            {ctas.map((cta, i) => (
              <CTAButton key={i} cta={cta} />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
