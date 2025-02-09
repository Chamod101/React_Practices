import React, { useEffect, useState } from "react";
import "./style.css";

const Tik_tak_toe = () => {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTrue, setIsXTrue] = useState(false);
  const [status, setStatus] = useState("");

  const setValue=(position)=>{
    const newSqures = [...squares]
    if (setWini(newSqures) || newSqures[position]) return;
    newSqures[position] = isXTrue ? "X" : "O" 
    setIsXTrue(!isXTrue)
    setSquares(newSqures)
  }

  const setWini=(squers)=>{
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
    ];

    for(let i=0; i< winningPatterns.length; i++){
      const[x,y,z] = winningPatterns[i];
      if(squers[x] && squers[x]===squers[y] && squers[x]===squers[z]){
        return squares[x];
      }
    
    }

    return null
  }

  useEffect(() => {
    if (!setWini(squares) && squares.every((item) => item !== "")) {
      setStatus(`This is a draw ! Please restart the game`);
    } else if (setWini(squares)) {
      setStatus(`Winner is ${setWini(squares)}. Please restart the game`);
    } else {
      setStatus(`Next player is ${isXTrue ? "X" : "O"}`);
    }
  }, [squares, isXTrue]);

  function handleRestart() {
    setIsXTrue(true);
    setSquares(Array(9).fill(""));
  }

  return (
    <div className="container">
      <div className="tik_tak_toe_container">
        {squares.map((square, index) => (
          <button key={index} onClick={()=>setValue(index)} className="square">{square}</button>
        ))}
      </div>
      <h1>{status}</h1>
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
};

export default Tik_tak_toe;
