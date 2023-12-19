import React, { useState } from "react";
import "./App.css"
import Header from "./components/Header";
import Footer from "./components/Footer";
import LightBulb from "./components/LightBulb";
import Box from "./components/Box";
import Dice from "./components/Dice";

const App = () => {
  const initialBoxState = [<Box />];
  const initialLightBulbState = [<LightBulb />];
  const initialDiceState = [<Dice />];
  const initialRolledNumbersState = [];

  const [boxPlus, setBoxPlus] = useState(initialBoxState)
  const [boxMinus, setBoxMinus] = useState([])

  const [addLightBulb, setAddLightBulb] = useState(initialLightBulbState);

  const [dicePlus, setDicePlus] = useState(initialDiceState)
  const [dicexMinus, setDiceMinus] = useState([])
  const [rolledNumbers, setRolledNumbers] = useState(initialRolledNumbersState);

  const [gameToShow, setGameToShow] = useState(null);
  
  const addBox = () => { setBoxPlus([...boxPlus, <Box />]) }
  const deleteBox = () => { setBoxMinus( boxPlus.pop() ) }
  const showBoxGame = () => { setGameToShow("box"); };
  const resetBoxGame = () => { setBoxPlus([]); setBoxMinus([]); };
  
  const addOneLightBulb = () => { setAddLightBulb([...addLightBulb, <LightBulb />]) };
  const deleteOneLightBulb = () => { setBoxMinus (addLightBulb.pop()) };
  const showLightBulbGame = () => { setGameToShow("lightBulb"); };
  const resetLightBulbGame = () => { setAddLightBulb(initialLightBulbState); };

  const addDice = () => { setDicePlus([...dicePlus, <Dice />]) }
  const deleteDice = () => { setDiceMinus( dicePlus.pop() ) }
  const showDiceGame = () => { setGameToShow("dice"); };
  const updateRolledNumbers = (rolledNum) => { setRolledNumbers([...rolledNumbers, rolledNum]); };
  const getTotalRolledSum = () => { return rolledNumbers.reduce((acc, curr) => acc + curr, 0); };
  const resetDiceGame = () => { setDicePlus([]); setDiceMinus([]); setRolledNumbers([]); };


  return (
    <div className="app-background">
      <h1><Header /></h1>
        <h2>Games</h2>

          <div className="buttonSuper">
            <button onClick={showBoxGame}>Box Game</button>
            <button onClick={showLightBulbGame}>Light Bulb Game</button>
            <button onClick={showDiceGame}>Dice Game</button>
          </div>


      {/* <h2>=====================================</h2> */}
      {gameToShow === "box" && (
        <>
          <h2>Box FIDGET:</h2>
          <div className="button">
            <button onClick={addBox} >add Box</button>
            <button onClick={deleteBox} >delete Box</button>
            <button onClick={resetBoxGame}>Reset Box Game</button>
          </div>
          <div className="container">
            {boxPlus}
          </div>
        </>
      )}
      {/* <h2>=====================================</h2> */}
      {gameToShow === "lightBulb" && (
        <>
          <h2>TURN the LIGHT FIDGET:</h2>
          <h4>(don't waste energy)</h4>
          <div className="button">
              <button onClick={addOneLightBulb} >add </button>
              <button onClick={deleteOneLightBulb} >delete </button>
              <button onClick={resetLightBulbGame}>Reset Light Bulb Game</button>
          </div>
          <div className="container">
            {addLightBulb}
          </div>
        </>
      )}

      {/* <h2>=====================================</h2> */}
      {gameToShow === "dice" && (
        <>
          <h2>ROLL teh Dice FIDGET:</h2>
          <div className="button">
            <button onClick={addDice} >add Box</button>
            <button onClick={deleteDice} >delete Box</button>
            <button onClick={resetDiceGame}>Reset Dice Game</button>
          </div>

          <div className="container">
            {dicePlus.map((dice, index) => (
              <Dice
                key={index}
                // onCountChange={(count) => updateCountAndTotalRolls(count)}
                onRolledNumberChange={(rolledNum) => updateRolledNumbers(rolledNum)}
              />
            ))}
          </div>

          <div className="container">
            <h3>Sum of Rolled Numbers: {getTotalRolledSum()}</h3>
          </div>

          <div className="container">
            {rolledNumbers.map((number, index) => (
              
              <p key={index}> 
                <h4>{index + 1}|</h4>
                |{number}|
              </p>
            ))}
            </div>
      
        </>
      )}




<h2>=====================================</h2>
      <h5><Footer /></h5>
    </div>
  )
}
export default App