import React, {useState} from "react";
import "../App.css"
import lightOff from '../assets/04.jpg'
import lightOn from '../assets/05.jpg'

const LightBulb = () => {
  const [light, setLight] = useState([]);
  // const [lightBulbOn, setLightBulbOn] = useState();

 
  return (
    <>

      <div className="lightBulb">
        <img src={lightOff} style={{ width: '59%' }} alt="Light bulb" />
      </div>

    </>
  )
}
export default LightBulb