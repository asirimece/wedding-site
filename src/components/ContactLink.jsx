import { useState } from "react";

export function ContactLink({ label, phone }) {

  const [showNumber, setShowNumber] = useState(false);

  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  const cleanPhone = phone.replace(/\s+/g, "").replace("+", "");

  const handleClick = () => {
    if (isMobile) {
      window.open(`https://wa.me/${cleanPhone}`, "_blank");
    } else {
      setShowNumber(prev => !prev);
    }
  };

  return (
    <div className="qaContactWrapper">
      <button
        className="qaContactLink"
        onClick={handleClick}
        type="button"
      >
        {label}
      </button>

      {showNumber && (
        <div className="qaPhoneReveal">
          {phone}
        </div>
      )}
    </div>
  );
}
