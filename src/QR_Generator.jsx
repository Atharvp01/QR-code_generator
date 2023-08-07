import QRCode from "react-qr-code";
import { useState } from "react";

const QR_Generator = () => {
  const [link, setLink] = useState("");
  const [hasButtonClicked, setHasButtonClicked] = useState(false);
  const handleLink = (e) => {
    setLink(e.target.value);
  };

  return (
    <>
      <h1>Enter the link whose QR code has to be generated</h1>
      <input onChange={handleLink}></input>
      <button onClick={() => setHasButtonClicked(!hasButtonClicked)}>
        Generate QR
      </button>
      {hasButtonClicked && <QRCode value={link} />}
    </>
  );
};

export default QR_Generator;
