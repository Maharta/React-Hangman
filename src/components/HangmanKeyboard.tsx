const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

interface HangmanKeyboardProps {
  activeLetters: string[];
  incorrectLetters: string[];
  isDisabled: boolean;
  addGuessedLetter: (key: string) => void;
}

const HangmanKeyboard = ({
  activeLetters,
  incorrectLetters,
  isDisabled,
  addGuessedLetter,
}: HangmanKeyboardProps) => {
  console.log(incorrectLetters);
  return (
    <div className="flex gap-2 flex-wrap justify-center font-bold">
      {KEYS.map((key, index) => {
        const isActive = activeLetters.includes(key);
        const isInactive = incorrectLetters.includes(key);
        return (
          <button
            onClick={() => {
              addGuessedLetter(key);
            }}
            disabled={isInactive || isDisabled}
            key={index}
            className={`px-4 py-3 w-14 cursor-pointer border border-black text-3xl uppercase
           hover:bg-blue-300  disabled:opacity-30 ${
             isActive ? "bg-blue-500 text-white" : ""
           }`}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default HangmanKeyboard;
