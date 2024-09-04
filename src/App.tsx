import { useEffect, useState } from "react";
import "./App.css";
import { AlphabetContainer } from "./components/alphabetContainer";

function App() {
  const [droppedLetters, setDroppedLetters] = useState([]);

  useEffect(() => {}, [droppedLetters]);

  const speak = (word) => {
    let utterance;
    const synth = window.speechSynthesis;

    if (word.length === 1) {
      utterance = new SpeechSynthesisUtterance(word);
      utterance.voice = synth.getVoices()[0];
    } else {
      utterance = new SpeechSynthesisUtterance(droppedLetters.join(""));
      utterance.voice = synth.getVoices()[0];
    }

    synth.speak(utterance);
  };

  const handleDragStart = (event, letter) => {
    event.dataTransfer.setData("text/plain", letter);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const letter = event.dataTransfer.getData("text/plain");
    setDroppedLetters([...droppedLetters, letter]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleRemove = (index) => {
    const arrayWithoutLetter = [...droppedLetters];
    arrayWithoutLetter.splice(index, 1);
    setDroppedLetters(arrayWithoutLetter);
  };

  /* const handleShowString = () => {
    alert(`String formado: ${droppedLetters.join("")}`);
  }; */

  return (
    <main className="h-screen w-full flex flex-col ">
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="mt-4 flex justify-center items-center h-36 mx-auto bg-gray-300 rounded-lg py-4 w-3/4"
      >
        <div className="flex mx-auto w-fit border-b-2 border-black pb-2">
          {droppedLetters.map((letter, index) => (
            <div className="relative">
              <p
                key={index}
                className="uppercase inline-block mx-1 p-6 bg-pink-400 font-bold text-white rounded-2xl"
              >
                {letter}
              </p>
              <span
                onClick={() => handleRemove(index)}
                className="absolute top-0 right-4"
              >
                x
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex mx-auto gap-4 mt-4">
        <button onClick={speak}>
          <svg
            fill="#e873cf"
            height="50px"
            width="50px"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            enable-background="new 0 0 512 512"
            stroke="#e873cf"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <g>
                    {" "}
                    <path d="m444.8,76.8c-6.8-9-19.7-10.9-28.8-4.2-9.1,6.7-11,19.4-4.2,28.4 64.8,85.9 64.8,225.6 0,311.5-6.8,9-5.1,21.9 4.2,28.4 11.4,7.9 24.8,1.2 28.8-4.2 74.9-99.1 74.9-260.6 0-359.9v-1.42109e-14z"></path>{" "}
                    <path d="m394.7,143.2c-6.8-9-19.7-10.8-28.8-4.2-9.1,6.7-11,19.4-4.2,28.4 36.6,48.4 36.6,130.3 0,178.7-6.8,9-5,21.8 4.2,28.4 11.7,8.3 24.8,1.2 28.8-4.2 48.1-63.6 48.1-163.4 0-227.1z"></path>{" "}
                    <path d="m291.9,438.3l-144.2-112.4v-138.2l144.2-112.3v362.9 5.68434e-14zm-185.4-122.8h-54.3v-117.7h54.3v117.7zm194.7-300.2l-180.1,141.9h-89.5c-11.4,0-20.6,9.1-20.6,20.3v158.2c0,11.2 9.2,20.3 20.6,20.3h91.2l178.4,140.7c12.8,10.1 31.9,1.1 31.9-15.1v-451.2c0-16.2-19-25.3-31.9-15.1z"></path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
        </button>
        <button onClick={() => setDroppedLetters([])}>
          <svg
            viewBox="0 0 24 24"
            stroke="black"
            width="50"
            height="50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M21.0303 22H13.9902C13.5702 22 13.2402 21.66 13.2402 21.25C13.2402 20.84 13.5802 20.5 13.9902 20.5H21.0303C21.4503 20.5 21.7803 20.84 21.7803 21.25C21.7803 21.66 21.4503 22 21.0303 22Z"
                fill="#FFFFFF"
              ></path>{" "}
              <path
                opacity="0.4"
                d="M15.41 16.3401L10.66 21.0901C9.54997 22.2001 7.77002 22.2601 6.59002 21.2701C6.52002 21.2101 6.46002 21.1501 6.40002 21.0901L5.53003 20.2201L3.73999 18.4301L2.88 17.5701C2.81 17.5001 2.75 17.4301 2.69 17.3601C1.71 16.1801 1.78 14.4201 2.88 13.3201L6.57 9.64008L7.63 8.58008L15.41 16.3401Z"
                fill="#FFFFFF"
              ></path>{" "}
              <path
                d="M21.1208 10.6399L15.4108 16.3399L7.63086 8.57994L13.3409 2.87994C14.5109 1.70994 16.4308 1.70994 17.6008 2.87994L21.1208 6.38994C22.2908 7.55994 22.2908 9.46994 21.1208 10.6399Z"
                fill="#e873cf"
              ></path>{" "}
            </g>
          </svg>
        </button>
      </div>
      <AlphabetContainer handleDragStart={handleDragStart} speak={speak} />
    </main>
  );
}

export default App;
