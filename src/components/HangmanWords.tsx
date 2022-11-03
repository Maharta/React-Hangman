interface HangmanWordsProps {
  wordToGuess: string;
  guessedLetters: string[];
  reveal: boolean;
}

const HangmanWords = ({
  wordToGuess,
  guessedLetters,
  reveal,
}: HangmanWordsProps) => {
  return (
    <div className="flex gap-2 uppercase font-bold text-5xl font-mono">
      {wordToGuess.split("").map((letter, index) => (
        <span key={index} className="border-solid border-b-black border-b-4">
          <span
            className={`${
              guessedLetters.includes(letter) || reveal
                ? "visible"
                : "invisible"
            } ${
              !guessedLetters.includes(letter) ? "text-red-500" : "text-black"
            }`}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWords;
