import { useState } from 'react';
import './App.css'
//creating a reuseable component to be able to pass data when user clicks the square 
function Square({value}) {
  return <button className="square">{value}</button>;
}
 

function App() {
  // declaring a shared state in the parent component to collect data from child components
  const [squares, setSquares] = useState(Array(9).fill(null));
    return <>
    {/* tic tac toe board ,
    started with nine buttons that all had an x and then split them into 
    rows and numbered them to create the board */}

   {/* passing the value prop to each box */}
  
     <div className="board-row">
     <Square value={squares[0]}/>
     <Square value={squares[1]} />
     <Square value={squares[2]}/>
   </div>
   <div className="board-row">
     <Square value={squares[3]}/>
     <Square value={squares[4]}/>
     <Square value={squares[5]}/>
   </div>
   <div className="board-row">
     <Square value={squares[6]}/>
     <Square value={squares[7]}/>
     <Square value={squares[8]}/>
   </div>

 </>
  
}

export default App
