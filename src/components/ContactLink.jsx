import { useState } from "react";

export function ContactLink({ name, phone, lang }) {

  const [showNumber, setShowNumber] = useState(false);

  const isMobile = /iPhone|Android/i.test(navigator.userAgent);

  const label =
    lang === "de"
      ? `📞 Kontakt ${name}`
      : `📞 Contacter ${name}`;

  // ===== FORMAT FOR DISPLAY =====
  function formatPhone(num) {
    // Germany example: 491761234567 → +49 176 123 4567
    if (num.startsWith("49")) {
      return `+49 ${num.slice(2,5)} ${num.slice(5,8)} ${num.slice(8)}`;
    }

    // France example: 33612345678 → +33 6 12 34 56 78
    if (num.startsWith("33")) {
      return `+33 ${num.slice(2,3)} ${num.slice(3,5)} ${num.slice(5,7)} ${num.slice(7,9)} ${num.slice(9)}`;
    }

    // fallback
    return `+${num}`;
  }

  function handleClick() {
    if (isMobile) {
      window.open(`https://wa.me/${phone}`, "_blank");
    } else {
      setShowNumber((prev) => !prev);
    }
  }

  return (
    <div style={{ marginTop: "0.5rem" }}>

      <span
        onClick={handleClick}
        style={{
          cursor: "pointer",
          textDecoration: "underline"
        }}
      >
        {label}
      </span>

      {!isMobile && showNumber && (
        <div
          style={{
            marginTop: "0.35rem",
            opacity: 0.8
          }}
        >
          {formatPhone(phone)}
        </div>
      )}

    </div>
  );
}
