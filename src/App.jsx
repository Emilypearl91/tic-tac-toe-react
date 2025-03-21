import { useState } from 'react';
import './App.css'
//creating a reuseable component to be able to pass data when user clicks the square 
function Square() {
//removed the value prop and replaced it with useState to change the box to have an "x" when clicked
const [value,setValue] = useState(null);
  //interactive component
function handleClick(){
  // square should display "x" when clicked
  setValue('X');
}
  return <button className="square" onClick={handleClick}>{value}</button>;
 }
 

function App() {

    return <>
    {/* tic tac toe board ,
    started with nine buttons that all had an x and then split them into 
    rows and numbered them to create the board */}

   {/* passing the value prop to each box */}
  
     <div className="board-row">
     <Square />
     <Square />
     <Square />
   </div>
   <div className="board-row">
     <Square />
     <Square />
     <Square />
   </div>
   <div className="board-row">
     <Square />
     <Square />
     <Square />
   </div>

 </>
  
}

export default App
