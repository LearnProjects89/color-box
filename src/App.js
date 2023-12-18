import React, { useState } from "react";
import "./App.css"
import Header from "./components/Header";
import Footer from "./components/Footer";
import LightBulb from "./components/LightBulb";
import Box from "./components/Box";
import Dice from "./components/Dice";

const App = () => {
  const [boxPlus, setBoxPlus] = useState([<Box />])
  const [boxMinus, setBoxMinus] = useState([])

  const [addLightBulb, setAddLightBulb] = useState([<LightBulb />]);
  const [deleteLightBulb, setdeleteLightBulb] = useState([]);

  const [dicePlus, setDicePlus] = useState([<Dice />])
  const [dicexMinus, setDiceMinus] = useState([])
  
  const addBox = () => { setBoxPlus([...boxPlus, <Box />]) }
  const deleteBox = () => { setBoxMinus( boxPlus.pop() ) }
  
  const addOneLightBulb = () => { setAddLightBulb([...addLightBulb, <LightBulb />]) };
  const deleteOneLightBulb = () => { setBoxMinus (addLightBulb.pop()) };

  const addDice = () => { setDicePlus([...dicePlus, <Dice />]) }
  const deleteDice = () => { setDiceMinus( dicePlus.pop() ) }

  return (
    <>
      <h1><Header /></h1>
      <h2>=====================================</h2>
      <h2>Box FIDGET:</h2>
      <div className="button">
        <button onClick={addBox} >add Box</button>
        <button onClick={deleteBox} >delete Box</button>
      </div>
      <div className="container">
        {boxPlus}
      </div>

      <h2>=====================================</h2>
      <h2>TURN the LIGHT FIDGET:</h2>
      <h4>(don't waste energy)</h4>
      <div className="button">
          <button onClick={addOneLightBulb} >add </button>
          <button onClick={deleteOneLightBulb} >delete </button>
      </div>
      <div className="container">
        {addLightBulb}
      </div>
      <h2>=====================================</h2>
      <h2>ROLL teh Dice FIDGET:</h2>
      <div className="button">
        <button onClick={addDice} >add Box</button>
        <button onClick={deleteDice} >delete Box</button>
      </div>
      <div className="container">
        {dicePlus}
      </div>
      {/* <h2><Dice /></h2> */}
      






      <h5><Footer /></h5>
    </>
  )
}
export default App