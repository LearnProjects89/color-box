import React, { useState } from "react";
import "./App.css"
import Header from "./components/Header";
import Footer from "./components/Footer";
import LightBulb from "./components/LightBulb";
import Box from "./components/Box";

const App = () => {
  const [box, setBox] = useState()

  const addBox = () => {
    setBox( box + 1 )
  }

  return (
    <>
      <h1><Header /></h1>
      
      <br />

      <Box />
      <button onClick={addBox} >add box</button>

      <br />
      <LightBulb />
      <Footer />
    </>
  )
}
export default App