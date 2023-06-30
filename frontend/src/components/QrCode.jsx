import { useState } from "react";
import QRCode from "react-qr-code";

function QrCode() {
  const [size, setSize] = useState(256);
  const url = window.location.href;
  const [value] = useState(url);

  return (
    <div className="QrCode">
      <div className="input-data">
        <input
          type="number"
          onChange={(e) =>
            setSize(parseInt(e.target.value === "" ? 0 : e.target.value, 10))
          }
          placeholder="Qr-code: 256"
        />
        <div className="underline" />
      </div>
      {value && (
        <QRCode
          title=" QR code"
          value={url}
          bgColor="#FFFFFF"
          fgColor="#000000"
          size={size === "" ? 0 : size}
        />
      )}
      <button type="button" onClick={() => window.print()} className="linkMenu">
        Imprimer
      </button>
    </div>
  );
}

export default QrCode;
