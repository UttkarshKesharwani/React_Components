import QRCode from "react-qr-code";

import React, { useEffect, useState } from "react";
import { qr_api } from "./QrAPI";

const QrCode = () => {
  const [input, setInput] = useState("");
  const [url, setUrl] = useState("");
  const [isClick, setIsClick] = useState(false);
  // console.log(url);

  useEffect(() => {
    setUrl(qr_api + input);
    // console.log("value");
  }, [input, isClick]);

  return (
    <div>
      <div>
        <input
          type="text"
          className="border border-black px-2 py-1 rounded-lg mr-4"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="border  border-black px-2 py-1 rounded-lg"
          onClick={() => {
            setIsClick(true);
          }}
        >
          Generate QR
        </button>
      </div>
      {isClick && (
        <div>
          <img src={url} alt="" />
        </div>
      )}
    </div>
  );
};

export default QrCode;
