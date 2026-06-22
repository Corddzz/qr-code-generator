import { useState } from "react";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [qrCodeURL, setQRCodeURL] = useState(
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=HelloWorld",
  );
  const [showButton, setShowButton] = useState(false);

  const handleBtnVisibility = (e) => {
    setShowButton(e.target.value.trim() !== "");
  };

  const handleGenerateQRCode = (e) => {
    setQRCodeURL(
      `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
        e.target.value,
      )}`,
    );
  };

  return (
    <div className="flex items-center justify-center h-screen bg-zinc-800 flex-col gap-4">
      <div className="w-80 bg-zinc-600/30 rounded-xl p-5 shadow-lg">
        <h1 className="text-white text-2xl font-bold text-center mb-4">
          QR Code Generator
        </h1>

        <div className="flex justify-center align-center mb-4">
          <img src={qrCodeURL} alt="QR code" title="QR code" />
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
              onClick={() =>
                setQRCodeURL(
                  `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
                    inputValue,
                  )}`,
                )
              }
            >
              Generate QR Code
            </button>

            <button className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-copy-icon lucide-copy"
              >
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
              </svg>
            </button>

            <button className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-download-icon lucide-download"
              >
                <path d="M12 15V3" />
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <path d="m7 10 5 5 5-5" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
