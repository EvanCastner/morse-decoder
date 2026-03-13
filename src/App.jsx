import { useState } from 'react';
import MorseInput from './components/MorseInput';

function App() {
  const [inputValue, setInputValue] = useState("");

    return (
      <div>
        <h1>Morse Code Decoder</h1>

        <MorseInput value={inputValue} onChange={setInputValue} />

      </div>
    );    
}

export default App
