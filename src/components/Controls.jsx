function Controls({ onDecode, onClear }) {
    return (
        <div>
            <button onClick={onDecode}>Decode</button>
            <button onClick={onClear}>Clear</button>
        </div>
    );
}

export default Controls;
