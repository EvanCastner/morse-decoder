import { useState } from 'react';
import decodeMorse from './utils/decodeMorse';
import morseMap from './utils/morseMap';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");
  const [warning, setWarning] = useState("");

  function handleDecode() {

    if (/[^.\-\s]/.test(inputValue)) {
      setWarning("Invalid characters detected");
    }
    else {
      setWarning("");
    }

    const result = decodeMorse(inputValue);
    setOutputValue(result);
  }

  function handleClear() {
    setInputValue("");
    setOutputValue("");
    setWarning("");
  }

    return (
      <div style={{ fontFamily: "Arial, sans-serif", padding: "30px" }}>
        <h1 style={{ textAlign: "center" }}>Morse Code Decoder</h1>

        <div style={{
            display: "flex",
            gap: "40px",
            alignItems: "flex-start",
            marginTop: "30px"
        }}>

          {/* LEFT SIDE - DECODER */}
          <div style={{ flex: 2 }}>

            <h2>Morse Input</h2>

            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Paste Morse code here..."
              style={{
                width: "100%",
                height: "140px",
                padding: "10px",
                fontSize: "16px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                resize: "none"
              }}
            />

            <div style={{
              display: "flex",
              gap: "10px",
              marginTop: "10px"
            }}>

              <button onClick={handleDecode}>Decode</button>

              <button onClick={handleClear}>
                Clear
              </button>
            </div>

            {warning && (
              <div style={{
                marginTop: "10px",
                padding: "10px",
                background: "#ffe5e5",
                color: "#b00020",
                borderRadius: "5px"
              }}>
                ⚠ {warning}
              </div>
            )}

            <h2 style={{ marginTop: "20px" }}>
              Decoded Output
            </h2>

            <textarea
              value={outputValue}
              readOnly
              style={{
                width: "100%",
                height: "120px",
                padding: "10px",
                fontSize: "16px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                resize: "none"
              }}
            />

          </div>

          {/* RIGHT SIDE - MORSE MAP */}
          <div style={{
            flex: 1,
            background: "#f5f5f5",
            padding: "15px",
            borderRadius: "6px",
            maxHeight: "500px",
            overflowY: "auto"
          }}>

            <h3>Morse Reference</h3>

            {Object.entries(morseMap).map(([code, letter]) => (
              <div
                key={code}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "4px 0",
                  borderBottom: "1px solid #ddd"
                }}
              >
                <strong>{letter}</strong>
                <span>{code}</span>
              </div>
            ))}

          </div>

        </div>
      </div>
    );    
}

export default App;
