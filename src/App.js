import React, { useState } from "react";
import "./App.css"
import Header from "./components/Header";
import Footer from "./components/Footer";
import LightBulb from "./components/LightBulb";
import Box from "./components/Box";

const App = () => {
  const [boxPlus, setBoxPlus] = useState([])
  const [boxMinus, setBoxMinus] = useState([])

  const addBox = () => {
    setBoxPlus([...boxPlus, <Box />]);
  }

  const deleteBox = () => {
    setBoxMinus( boxPlus.pop() )
  }

  return (
    <>
      <h1><Header /></h1>

      <div className="button">
        <button onClick={addBox} >add Box</button>
        <button onClick={deleteBox} >delete Box</button>
      </div>

      <div className="container">
        {boxPlus}
      </div>

      <br />
      <LightBulb />
      <h5><Footer /></h5>
    </>
  )
}
export default App