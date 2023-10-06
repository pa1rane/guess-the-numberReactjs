import React, { useState } from 'react';

const App = () => {
 
  const randomNum = (Math.random() * 100).toFixed(0);

  const [input, setInput] = useState("");
  const [num, setNum] = useState(randomNum);
  const [guessState, setGuessState] = useState(" ");
  const [guesses, setGuesses] = useState([input]);

  
  const handleInput = (e) => {
    setInput(e.target.value);
  }

  const handleSubmit = () => {
    if (input.trim() !== "") {
    setGuesses((prev) => ([...prev, input]))
    if(input > num) {
      setGuessState("To High")
    } else if (input < num) {
      setGuessState("To Low")
    } else {
      setGuessState("You are absolutely Correct")
    }
  }
    setInput(" ");
  
  }
 
  const handleReset = () => {
    setNum((Math.random() * 100).toFixed(0));
    setGuessState(" ");
    setInput(" ");
    setGuesses([]);
  }

  return (
    <>
      <h1>Enter a Guess Between 0 to 100</h1>
      <br />
      <input type="number" onChange={handleInput} disabled={guesses.length >= 10 ? true : false} value={input} placeholder='Enter a number'/>
      <br />
      <div>
        <button onClick={handleSubmit} disabled={guesses.length >= 10 ? true : false}>Submit</button>
        <button onClick={handleReset} disabled={guesses.length >= 10 ? false : true}>Start Game</button>
        <p>{guessState}</p>
        <div>
          <p>Your Guesses : </p>
          {guesses.map((guess, index) => (
            <p key={index}>{guess},</p>
          ))}
          </div>
      </div>
    </>
  )
}

export default App;