import React, {useState} from "react"

const Box = () => {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState("lightcyan")

    const changeColor = () => {
        const brightColors = "rgb(" + Math.floor(Math.random()*255) + "," + Math.floor(Math.random()*255)  + "," + Math.floor(Math.random()*255) + ")"
        // const brightColors = [
        //   "rgb(255, 0, 0)",
        //   "rgb(255, 165, 0)",
        //   "rgb(255, 255, 0)",
        //   "rgb(0, 255, 0)",
        //   "rgb(0, 255, 255)",
        //   "rgb(0, 0, 255)",
        //   "rgb(255, 0, 255)",
        //   "rgb(255, 192, 203)",
        // ];
        // const randomBrightColor = brightColors[Math.floor(Math.random() * brightColors.length)];

        setColor(brightColors)
        setCount(count + 1)
    }

  return (
    <>
      <div className="box" 
        onClick={() => changeColor(color)} 
        style={{ backgroundColor: color, fontSize: 150}}>
        {count}
      </div>
    </>
  )
}
export default Box