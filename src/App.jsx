import { useState } from 'react';
import './App.css'
//creating a reuseable component to be able to pass data when user clicks the square 
function Square({value, onSquareClick}) {
  //onclick will call function when square is clicked 
  return  <button className="square" onClick={onSquareClick}>{value}</button>;
}
 

function App() {
  // declaring a shared state in the parent component to collect data from child components
  //the array corresponds with a square
  // set square function rerenders the board
  const [squares, setSquares] = useState(Array(9).fill(null));
  // defining the handle click to update the array 
  // i argument takes the index of square to update
  function handleClick(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }
    return <>
    {/* tic tac toe board */}

   {/* passing the value prop to each box */}
   {/* arrow functions call handle click when square is clicked */}
   <div className="board-row">
    <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
    <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
    <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
  </div>
  <div className="board-row">
    <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
    <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
    <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
  </div>
  <div className="board-row">
    <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
    <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
    <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
  </div>
 </>
  
}

export default App
