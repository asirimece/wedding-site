import { useState, useEffect } from "react";

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
    const savedLang = localStorage.getItem("wedding_lang");

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
    localStorage.setItem("wedding_lang", l);
  };

  if (unlocked) return children;

  const t = TEXT[lang];

  return (
    <div style={styles.wrapper}>
      <div style={styles.overlay} />

      <div style={styles.langSwitch}>
        <button onClick={() => switchLang("de")}>DE</button>
        <span> | </span>
        <button onClick={() => switchLang("fr")}>FR</button>
      </div>

      <div style={styles.card}>
        <h1 style={styles.title}>{t.title}</h1>
        <p style={styles.subtitle}>{t.subtitle}</p>

        <input
          type="password"
          placeholder={t.placeholder}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
          style={styles.input}
        />

        <button onClick={handleSubmit} style={styles.button}>
          {t.button}
        </button>

        {error && <p style={styles.error}>{t.error}</p>}
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: "url('/backgrounds/bg.png')", 
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    fontFamily: "'Noto Serif Display', serif"
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.35)"
  },

  langSwitch: {
    position: "absolute",
    top: 20,
    right: 20,
    zIndex: 3,
    color: "white"
  },

  card: {
    position: "relative",
    zIndex: 2,
    background: "rgba(255,255,255,0.92)",
    padding: "36px",
    borderRadius: "14px",
    textAlign: "center",
    minWidth: "260px"
  },

  title: {
    marginBottom: "6px",
    fontWeight: 600
  },

  subtitle: {
    marginBottom: "20px"
  },

  input: {
    padding: "10px",
    width: "100%",
    fontSize: "16px",
    marginBottom: "12px"
  },

  button: {
    padding: "10px",
    width: "100%",
    cursor: "pointer"
  },

  error: {
    marginTop: "10px",
    color: "crimson"
  }
};
