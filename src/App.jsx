import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState("");

    return (
      <div>
        <header>
          <h1>Morse Code Decoder</h1>
        </header>

        <main>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type in Morse Code Values"
          />
        </main>
      </div>
    );    
}

export default App
