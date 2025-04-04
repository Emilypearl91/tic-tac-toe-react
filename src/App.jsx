import { useState } from 'react';
import './App.css'
//creating a reuseable component to be able to pass data when user clicks the square 
function Square({value, onSquareClick}) {
  //onclick will call function when square is clicked 
  return  <button className="square" onClick={onSquareClick}>{value}</button>;
}
 

function App() {
  // set another state to make "x" the default 
  const [xIsNext, setXIsNext] = useState(true);
  // declaring a shared state in the parent component to collect data from child components
  //the array corresponds with a square
  // set square function rerenders the board
  const [squares, setSquares] = useState(Array(9).fill(null));
  // defining the handle click to update the array 
  // i argument takes the index of square to update
  function handleClick(i) {
  // to ensure that a turn doesn't get overwritten, check if the square already has a value snd if a player has won
  if (squares[i] || calculateWinner(squares)) {
    return;}

    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    // each time a square is clicked , xIsNext boolean will flip causing the value to change from "x" to "o"
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares); 

    setXIsNext(!xIsNext);
  }
  // this function checks if there is a winner by taking all the values of the squares and calculates a winner
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  // calculate who is the winner and which players tun it is
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
    return <>
    {/* game status to display players turn and who the winner is  */}
    <div className="status">{status}</div>
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
