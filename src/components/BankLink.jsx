import { useState } from "react";

export function BankLink({
  label,
  hideLabel,
  copyLabel,
  copiedLabel,
  accountName,
  address,
  iban
}) {
  const [showBank, setShowBank] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyIban = async () => {
    await navigator.clipboard.writeText(iban.replace(/\s+/g, ""));
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <div className="infoBankWrapper">
      <button
        className="infoBankLink"
        type="button"
        onClick={() => setShowBank((prev) => !prev)}
      >
        🎁 {showBank ? hideLabel : label}
      </button>

      {showBank && (
        <div className="infoIbanReveal">
          <p><strong> </strong> {accountName}</p>
          {address && <p><strong> </strong> {address}</p>}
          <p><strong> </strong> {iban}</p>

          <button type="button" className="infoCopyButton" onClick={copyIban}>
            {copied ? copiedLabel : copyLabel}
          </button>
        </div>
      )}
    </div>
  );
}