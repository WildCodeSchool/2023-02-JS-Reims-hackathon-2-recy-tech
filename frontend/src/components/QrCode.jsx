import { useState } from "react";
import QRCodeCanvas from "qrcode.react";

// Link for QRCODE : https://hackernoon.com/how-to-build-a-qr-code-generator-in-react

function QrCode() {
  const [url, setUrl] = useState("");

  const downloadQRCode = (e) => {
    e.preventDefault();
    setUrl("");
  };

  const qrCodeEncoder = (e) => {
    setUrl(e.target.value);
  };

  const qrcode = (
    <QRCodeCanvas
      key={url}
      value={url}
      size={300}
      bgColor="#00ff00"
      level="H"
    />
  );

  return (
    <div className="qrcode_container">
      <div>{qrcode}</div>
      <div className="input_group">
        <form onSubmit={downloadQRCode}>
          <label>Enter URL </label>
          <input
            type="text"
            value={url}
            onChange={qrCodeEncoder}
            placeholder="chemin"
          />
          <button type="submit" disabled={!url}>
            Télécharger le QR Code
          </button>
        </form>
      </div>
    </div>
  );
}

export default QrCode;
