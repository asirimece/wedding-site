import "./PasswordGate.css";
import { useState, useEffect } from "react";
import { LanguageSwitch } from "./components/LanguageSwitch.jsx";



const PASSWORD = "N&R26";

const TEXT = {
  de: {
    title: "Die Hochzeit von Nora\u00A0&\u00A0Romain",
    subtitle: "Bitte Passwort eingeben",
    placeholder: "Passwort",
    button: "Eintreten",
    error: "Falsches Passwort"
  },
  fr: {
    title: "Le Mariage de Nora\u00A0&\u00A0Romain",
    subtitle: "Veuillez entrer le mot de passe",
    placeholder: "Mot de passe",
    button: "Entrer",
    error: "Mot de passe incorrect"
  }
};

export default function PasswordGate({ children }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [lang, setLang] = useState("de");
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    const ok = sessionStorage.getItem("wedding_access");
    const savedLang = localStorage.getItem("lang");

    if (ok === "true") setUnlocked(true);
    if (savedLang) setLang(savedLang);
  }, []);

  const handleSubmit = () => {
    if (input === PASSWORD) {
      sessionStorage.setItem("wedding_access", "true");
      setUnlocked(true);
    } else {
      setError(true);
    }
  };

  const switchLang = (l) => {
    setLang(l);
    localStorage.setItem("lang", l);
  };

  if (unlocked) return children;

  const t = TEXT[lang];

  return (
  <div className="gateWrapper">
    <div className="gateOverlay" />

    <LanguageSwitch
      lang={lang}
      onChange={switchLang}
    />

    <div className="gateCard">
      <h1 className="gateTitle">{t.title}</h1>
      <p className="gateSubtitle">{t.subtitle}</p>

      <input
        type="password"
        placeholder={t.placeholder}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        className="gateInput"
      />

      <button onClick={handleSubmit} className="gateButton">
        {t.button}
      </button>

      {error && <p className="gateError">{t.error}</p>}
    </div>
  </div>
);

}
