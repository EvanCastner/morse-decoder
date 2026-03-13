import morseMap from "./morseMap";

function decodeMorse(input) {
    const normalized = input.replace(/\n/g, "   ").trim();
    const words = normalized.split("   ");
    const decodedWords = words.map(word => {
        const letters = word.split(" ");
        const decodedLetters =letters.map(token => {
            return morseMap[token] || "?";
        });
        
        return decodedLetters.join("");
    });

    return decodedWords.join("");
}

export default decodeMorse;
