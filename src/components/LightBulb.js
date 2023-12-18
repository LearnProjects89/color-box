import React, {useState} from "react";
import "../App.css"
import lightOff from '../assets/04.jpg'
import lightOn from '../assets/05.jpg'

const LightBulb = () => {
  const [light, setLight] = useState(lightOff);

  const turnTheLight = () => {
    const newLight = light === lightOff ? lightOn : lightOff;
    setLight(newLight);
  };
 
  return (
    <>

      <div className="lightBulb">
        <img 
          onClick={turnTheLight} 
          src={light} 
          style={{ width: '50%' }} 
          alt="Light bulb" />
      </div>

    </>
  )
}
export default LightBulb