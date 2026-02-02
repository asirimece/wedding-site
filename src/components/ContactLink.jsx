import { useState } from "react";

export function ContactLink({ name, phone, lang }) {
  const [showNumber, setShowNumber] = useState(false);

  const label =
    lang === "de" ? `📞 Kontakt ${name}` : `📞 Contacter ${name}`;

  // ✅ WhatsApp needs digits only: 41764772276
  const digits = String(phone).replace(/\D/g, "");
  const waLink = `https://wa.me/${digits}`;

  // ✅ Desktop reveal format (nice display)
  function formatPhone(num) {
    // Switzerland: 41 76 477 22 76
    if (num.startsWith("41") && num.length >= 11) {
      return `+41 ${num.slice(2, 4)} ${num.slice(4, 7)} ${num.slice(7, 9)} ${num.slice(9, 11)}`;
    }

    // Germany: 49 176 123 45 67 (basic)
    if (num.startsWith("49") && num.length >= 12) {
      return `+49 ${num.slice(2, 5)} ${num.slice(5, 8)} ${num.slice(8, 10)} ${num.slice(10, 12)}`;
    }

    // France: 33 6 12 34 56 78
    if (num.startsWith("33") && num.length >= 11) {
      return `+33 ${num.slice(2, 3)} ${num.slice(3, 5)} ${num.slice(5, 7)} ${num.slice(7, 9)} ${num.slice(9, 11)}`;
    }

    return `+${num}`;
  }

  function handleClick(e) {
    // Use breakpoint logic (same as your site)
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (isMobile) {
      // ✅ Most reliable on mobile (Safari/Chrome): navigate directly
      window.location.href = waLink;
      return;
    }

    // Desktop: reveal/hide number
    setShowNumber((prev) => !prev);
  }

  return (
    <div style={{ marginTop: "0.6rem" }}>
      <button
        type="button"
        onClick={handleClick}
        style={{
          background: "none",
          border: "none",
          padding: 0,
          cursor: "pointer",
          textDecoration: "underline",
          fontFamily: "Tenor Sans",
          letterSpacing: "0.08em",
          color: "#3C3421",
        }}
      >
        {label}
      </button>

      {/* Desktop reveal */}
      {showNumber && (
        <div
          style={{
            marginTop: "0.4rem",
            opacity: 0.85,
            fontFamily: "Tenor Sans",
            letterSpacing: "0.08em",
            fontSize: "0.95rem",
            color: "#3C3421",
          }}
        >
          {formatPhone(digits)}
        </div>
      )}
    </div>
  );
}
