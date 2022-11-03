import { useState } from "react";
import HangmanKeyboard from "./components/HangmanKeyboard";
import HangmanStick from "./components/HangmanStick";
import HangmanWords from "./components/HangmanWords";
import useEventListener from "./hooks/useEventListener";
import wordList from "./wordList.json";

function getRandomWord() {
  const index = Math.floor(Math.random() * wordList.length);
  return wordList[index];
}

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return getRandomWord();
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLetters = (key: string) => {
    if (guessedLetters.includes(key)) return;
    if (!key.match(/^[a-z]$/)) return;
    if (isWinner || isLoser) return;
    setGuessedLetters((guessedWord) => [...guessedWord, key]);
  };

  useEventListener("keypress", (e) => {
    const key = e.key;
    if ((isWinner || isLoser) && key === "Enter") {
      setWordToGuess(getRandomWord());
      setGuessedLetters([]);
    }
    addGuessedLetters(key);
  });

  return (
    <main className="flex flex-col items-center gap-8 max-w-[800px] mx-auto">
      <h1 className="font-bold text-2xl mt-4 text-center">
        {isWinner ? "You Win! - Press ENTER to play again" : ""}
        {isLoser ? "You Lose! - Press ENTER to play again" : ""}
      </h1>
      <HangmanStick incorrectGuess={incorrectLetters.length} />
      <HangmanWords
        wordToGuess={wordToGuess}
        guessedLetters={guessedLetters}
        reveal={isLoser}
      />
      <HangmanKeyboard
        addGuessedLetter={addGuessedLetters}
        isDisabled={isWinner || isLoser}
        incorrectLetters={incorrectLetters}
        activeLetters={guessedLetters.filter((letter) =>
          wordToGuess.includes(letter)
        )}
      />
    </main>
  );
}

export default App;
