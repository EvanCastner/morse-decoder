function MorseInput({ value, onChange }) {
    return (
        <div>
            <h2>Morse Input</h2>

            <textarea
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Enter your morse code here"
            />
        </div>
    );
}

export default MorseInput;
