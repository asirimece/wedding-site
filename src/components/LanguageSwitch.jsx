export function LanguageSwitch({ lang, onChange }) {
  return (
    <div className="langSwitch">
      <button
        className={lang === "de" ? "active" : ""}
        onClick={() => onChange("de")}
      >
        DE
      </button>

      <span className="langDivider">|</span>

      <button
        className={lang === "fr" ? "active" : ""}
        onClick={() => onChange("fr")}
      >
        FR
      </button>
    </div>
  );
}
