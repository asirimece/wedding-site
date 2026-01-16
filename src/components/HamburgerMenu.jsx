// src/components/HamburgerMenu.jsx
import { useEffect, useState } from "react";

export function HamburgerMenu({ items, lang, setLang, languages }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const langs = Object.keys(languages ?? {});

  return (
    <header className="header">
      <a className="brand" href="#top" onClick={() => setOpen(false)}>
        Wedding
      </a>

      <button className="burger" type="button" onClick={() => setOpen(true)} aria-label="Open menu">
        ☰
      </button>

      {open ? (
        <div className="menuOverlay" role="dialog" aria-modal="true">
          <div className="menuPanel">
            <div className="menuTop">
              <div className="menuTitle">Menu</div>
              <button className="menuClose" type="button" onClick={() => setOpen(false)} aria-label="Close menu">
                ✕
              </button>
            </div>

            <nav className="menuNav">
              {items.map((it) => (
                <a
                  key={it.href}
                  className="menuItem"
                  href={it.href}
                  onClick={() => setOpen(false)}
                >
                  {it.label}
                </a>
              ))}
            </nav>

            <div className="menuLang">
              <div className="menuLangLabel">Language</div>
              <div className="menuLangRow">
                {langs.map((k) => (
                  <button
                    key={k}
                    type="button"
                    className={`pill ${lang === k ? "isActive" : ""}`}
                    onClick={() => {
                      setLang(k);
                      setOpen(false);
                    }}
                  >
                    {k.toUpperCase()}
                  </button>
                ))}
              </div>
              <div className="menuHint">
                (We’ll fill DE/FR later — EN is the working version.)
              </div>
            </div>
          </div>

          <button className="menuBackdrop" type="button" onClick={() => setOpen(false)} aria-label="Close backdrop" />
        </div>
      ) : null}
    </header>
  );
}
