import { useState } from "react";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [qrCodeURL, setQRCodeURL] = useState(
    `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`,
  );
  const [showButton, setShowButton] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);

  const handleBtnVisibility = (e) => {
    setShowButton(e.target.value.trim() !== "");
  };

  const handleGenerateQRCode = () => {
    setQRCodeURL(
      `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
        inputValue,
      )}`,
    );

    setShowQRCode(true);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-zinc-800 flex-col gap-4">
      <div className="w-80 bg-zinc-600/30 rounded-xl p-5 shadow-lg border border-zinc-400/30">
        <h1 className="text-white text-2xl font-bold text-center mb-4">
          QR Code Generator
        </h1>

        <div className="flex justify-center align-center mb-4">
          {inputValue.trim() !== "" && showQRCode ? (
            <img src={qrCodeURL} alt="QR code" title="QR code" />
          ) : (
            <div className="w-40 h-40 bg-zinc-500/30 flex items-center justify-center rounded-lg shadow-md p-2">
              <h2 className="text-center font-bold font-mono text-zinc-400/80">
                Paste or type to generate QR Code
              </h2>
            </div>
          )}
        </div>
      </div>

      <div className="w-96 bg-zinc-600/30 rounded-xl p-5 shadow-lg">
        <div className="grid grid-cols-5 gap-4">
          <input
            type="text"
            placeholder="Enter text for QR code"
            className="w-full rounded-md bg-zinc-700 px-3 py-2 text-white placeholder:text-zinc-400 border border-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 col-span-5"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              handleBtnVisibility(e);
            }}
            required
          />
        </div>

        {showButton && (
          <div className="flex justify-center gap-4 mt-4">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-md"
              onClick={handleGenerateQRCode}
            >
              Generate QR Code
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
