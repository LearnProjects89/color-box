import React, {useState} from "react"

const Box = () => {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState(["green", "blue"])

    const changeCount = () => {
        setCount(count + 1)
    }
    
    const changeColor = (index) => {
        setColor(color + index)
    }

  return (
    <>
      <div className="box" onClick={changeColor} style={{ backgroundColor: color }}>
        {count}
      </div>
    </>
  )
}
export default Box