
import './App.css'


function App() {

    return <>
    {/* tic tac toe board ,
    started with nine buttons that all had an x and then split them into 
    rows and numbered them to create the board */}
    <div className="board-row">
      <button className="square">1</button>
      <button className="square">2</button>
      <button className="square">3</button>
   </div>
   <div className="board-row">
      <button className="square">4</button>
      <button className="square">5</button>
      <button className="square">6</button>
   </div>
   <div className="board-row">
      <button className="square">7</button>
      <button className="square">8</button>
      <button className="square">9</button>
   </div>
 </>
  
}

export default App
