import { useState } from 'react';
import MorseInput from './components/MorseInput';
import OutputDisplay from './components/OutputDisplay';
import Controls from './components/Controls';
import decodeMorse from './utils/decpdeMorse';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");

  function handleDecode() {
    const result = decodeMorse(inputValue);
    setOutputValue(result);
  }

  function handleClear() {
    setInputValue("");
    setOutputValue("");
  }

    return (
      <div>
        <h1>Morse Code Decoder</h1>

        <MorseInput value={inputValue} onChange={setInputValue} />

        <Controls
          onDecode={handleDecode}
          onClear={handleClear}
        />

        <OutputDisplay value={outputValue}/>

      </div>
    );    
}

export default App
