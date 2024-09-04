import { alphabet, keyboard } from "../utils/abc";

export const AlphabetContainer = ({ handleDragStart, speak }) => {
  const alphabetArray = alphabet;

  return (
    <ul className="mt-4 flex flex-wrap justify-around keyboard bg-pink-100 p-6 rounded-lg shadow-lg mx-auto w-3/4 ">
      {alphabetArray.map((letter, index) => {
        return (
          <li
            key={index}
            draggable
            onDragStart={(event) => handleDragStart(event, letter)}
            className="key uppercase p-4 bg-pink-300 text-white font-bold text-6xl rounded-lg mx-1 shadow-md border-2 border-pink-200 transform hover:scale-105 transition-transform duration-200 ease-in-out"
            onClick={() => speak(letter)}
          >
            <p>{letter}</p>
          </li>
        );
      })}
    </ul>
  );
};
