import { useState } from "react";

export function ContactLink({ name, phone, lang }) {

  const [showNumber, setShowNumber] = useState(false);

  // Use viewport instead of userAgent
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  const label =
    lang === "de"
      ? `📞 Kontakt ${name}`
      : `📞 Contacter ${name}`;

  // ===== CLEAN NUMBER FOR WHATSAPP =====
  const cleanPhone = phone.replace(/\D/g, "");

  // ===== FORMAT FOR DISPLAY =====
  function formatPhone(num) {

    // Germany (+49)
    if (num.startsWith("49")) {
      return `+49 ${num.slice(2,5)} ${num.slice(5,8)} ${num.slice(8,10)} ${num.slice(10)}`;
    }

    // France (+33)
    if (num.startsWith("33")) {
      return `+33 ${num.slice(2,3)} ${num.slice(3,5)} ${num.slice(5,7)} ${num.slice(7,9)} ${num.slice(9)}`;
    }

    // Switzerland (+41)
    if (num.startsWith("41")) {
      return `+41 ${num.slice(2,4)} ${num.slice(4,7)} ${num.slice(7,9)} ${num.slice(9)}`;
    }

    // fallback
    return `+${num}`;
  }

  function handleClick() {

    if (isMobile) {
      window.open(`https://wa.me/${cleanPhone}`, "_blank");
    } else {
      setShowNumber((prev) => !prev);
    }

  }

  return (
    <div style={{ marginTop: "0.6rem" }}>

      <span
        onClick={handleClick}
        style={{
          cursor: "pointer",
          textDecoration: "underline",
          fontFamily: "Tenor Sans",
          letterSpacing: "0.08em"
        }}
      >
        {label}
      </span>

      {/* Desktop reveal */}
      {!isMobile && showNumber && (
        <div
          style={{
            marginTop: "0.4rem",
            opacity: 0.85,
            fontFamily: "Tenor Sans",
            letterSpacing: "0.08em",
            fontSize: "0.95rem"
          }}
        >
          {formatPhone(cleanPhone)}
        </div>
      )}

    </div>
  );
}
