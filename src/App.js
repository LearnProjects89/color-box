import React from "react";
import "./App.css"
import Header from "./components/Header";
import Footer from "./components/Footer";
import LightBulb from "./components/LightBulb";
import Box from "./components/Box";

const App = () => {
  return (
    <>
      <p>App</p>
      <Header />
      <LightBulb />
      <br />
      <Box />
      <Footer />
    </>
  )
}
export default App