
import './App.css'
//creating a reuseable component to be able to pass data when user clicks the square
//pass the value prop 
function Square({ value }) {
  //interactive component
function handleClick(){
  console.log('clicked!');
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
     <Square value="1" />
     <Square value="2" />
     <Square value="3" />
   </div>
   <div className="board-row">
     <Square value="4" />
     <Square value="5" />
     <Square value="6" />
   </div>
   <div className="board-row">
     <Square value="7" />
     <Square value="8" />
     <Square value="9" />
   </div>

 </>
  
}

export default App
