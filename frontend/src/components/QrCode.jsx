import { useState } from "react";

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

  return (
    <div className="qrcode_container">
      <div className="input_group">
        <form onSubmit={downloadQRCode}>
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
