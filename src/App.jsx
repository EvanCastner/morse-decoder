import { useState } from 'react';
import "./App.css";
import decodeMorse from './utils/decodeMorse';
import morseMap from './utils/morseMap';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");
  const [warning, setWarning] = useState("");

  function handleDecode() {

    if (/[^.\-\s]/.test(inputValue)) {
      setWarning("Invalid characters detected");
      return;
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
      <div className='app-container'>
        <div className='card'>

          <h1>Morse Code Decoder</h1>

          <div className='layoout'> 

          {/* LEFT SIDE - DECODER */}
          <div className='decoder'>

            <h2>Morse Input</h2>

            <textarea 
              className='textarea'
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Paste Morse code here..."
            />

            <div className='button-group'>
              <button onClick={handleDecode}>Decode</button>

              <button onClick={handleClear}>Clear</button>
            </div>

            {warning && <div className="warning">{warning}</div>}

            <h2>Decoded Output</h2>

            <textarea className='textarea'
             value={outputValue} readOnly />

          </div>

          {/* RIGHT SIDE - MORSE MAP */}
          <div className='morse-map'>

            <h3>Morse Reference</h3>

            {Object.entries(morseMap).map(([code, letter]) => (
              <div className='morse-row' key={code}>
                <strong>{letter}</strong>
                <span>{code}</span>
              </div>
            ))}

          </div>
        </div>
        </div>
      </div>
    );    
}

export default App;
