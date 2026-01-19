import { useEffect, useState } from "react";

export function SectionNav({ items }) {
  const [active, setActive] = useState(items[0]?.href ?? "");

  useEffect(() => {
    const sections = items
      .map(it => document.querySelector(it.href))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0.01,
      }
    );

    sections.forEach(sec => observer.observe(sec));

    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="sectionNav">
      <ul className="sectionNavList">
        {items.map(it => (
          <li key={it.href}>
            <a
              href={it.href}
              className={`sectionNavLink ${active === it.href ? "isActive" : ""}`}
            >
              {it.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
