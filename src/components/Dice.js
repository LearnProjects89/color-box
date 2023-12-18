import React, {useState} from "react"
import one from '../assets/Dice01.jpg'
import two from '../assets/Dice02.jpg'
import three from '../assets/Dice03.jpg'
import four from '../assets/Dice04.jpg'
import five from '../assets/Dice05.jpg'
import six from '../assets/Dice06.jpg'

const Dice = () => {
    const [count, setCount] = useState(0)
    const [diceRoll, setDiceRoll] = useState(null)
    const [rolledNumber, setRolledNumber] = useState(null);
    
    const diceRollRoll = [one, two, three, four, five, six];

    const changeRoll = () => {
        const randomeDiceRoll = Math.floor(Math.random()*diceRollRoll.length)

        setDiceRoll(diceRollRoll[randomeDiceRoll])
        setRolledNumber(randomeDiceRoll + 1);
        setCount(count + 1)
    }

  return (
    <>
        <h3>{count}</h3>
        <br />
        <h3>Last Rolled: {rolledNumber}</h3>
        <div className="box" 
            onClick={changeRoll} 
            style={{  }}>
            {diceRoll && <img src={diceRoll} style={{ width: '100%' }} alt="Dice" />}
        </div>
        
    </>
  )
}
export default Dice