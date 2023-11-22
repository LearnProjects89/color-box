import React, {useState} from "react"

const Box = () => {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState("purple")

    const changeColor = () => {
        const newColor = "rgb(" + Math.floor(Math.random()*255) + "," + Math.floor(Math.random()*255)  + "," + Math.floor(Math.random()*255) + ")"
        setColor(newColor)
        setCount(count + 1)
    }

  return (
    <>
      <div className="box" 
        onClick={() => changeColor(color)} 
        style={{ backgroundColor: color }}>
        {count}
      </div>
    </>
  )
}
export default Box