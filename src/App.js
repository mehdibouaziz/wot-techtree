import React from 'react'

import TankCard from './components/TankCard'
import plindex from './images/PL';

import './App.css';


const App = props => {

  let maxRows = plindex[plindex.length-1].row;
  let gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(10, 1fr)",
    gridTemplateRows: "repeat(" + maxRows + ", 80px)",
    columnGap: "10px",
  }
  let cards = plindex.map((tank) => 
    <TankCard tank={tank} key={tank.key} />
  );

  return (
    <div className="flex-row h100v w100v">
      <div className="flex-col w100p">
        <div className="tech-tree-window w100p">
          <div className="" style={gridStyle}>
            {cards}
          </div>
        </div>
      </div>
    </div>
  )
}


export default App
