function OutputDisplay({ value }) {
    return (
        <div>
            <h2>Decoded Output</h2>

            <textarea
                value={value}
                readOnly
            />
        </div>
    );
}

export default OutputDisplay;
