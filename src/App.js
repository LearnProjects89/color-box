import React, { useState } from "react";
import "./App.css"
import Header from "./components/Header";
import Footer from "./components/Footer";
import LightBulb from "./components/LightBulb";
import Box from "./components/Box";

const App = () => {
  const [boxPlus, setBoxPlus] = useState([])
  const [boxMinus, setBoxMinus] = useState([])

  const addBoxPlus = () => {
    setBoxPlus([...boxPlus, <Box />]);
  }

  const deleteBoxMinus = () => {
    setBoxMinus( boxPlus.pop() )
  }

  return (
    <>
      <h1><Header /></h1>

      <div className="button">
        <button onClick={addBoxPlus} >add Box</button>
        <button onClick={deleteBoxMinus} >delete Box</button>
      </div>

      <div className="container">
        {boxPlus}
      </div>

      <br />
      <LightBulb />
      <Footer />
    </>
  )
}
export default App