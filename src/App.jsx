import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState("");

    return (
      <div>
        <header>
          <h1>Morse Code Decoder</h1>
        </header>

        <main style={{ diplay: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type in Morse Code Values"
            style={{ fontSize: "20px", width: "1000px", height: "200px", padding: "10px", resize: "none" }}
          />

          <button 
            onClick={() => console.log(inputValue)}
            style={{ fontSize: "18px", padding: "12px 30px", marginTop: "10px" }}
          >
            Click to Decode
          </button>
        </main>
      </div>
    );    
}

export default App
