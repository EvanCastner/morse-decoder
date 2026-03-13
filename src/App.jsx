import { useState } from 'react';
import MorseInput from './components/MorseInput';
import OutputDisplay from './components/OutputDisplay';
import Controls from './components/Controls';

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
