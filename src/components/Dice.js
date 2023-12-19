import React, {useState, useEffect } from "react"
import "../App.css"
import one from '../assets/Dice01.jpg'
import two from '../assets/Dice02.jpg'
import three from '../assets/Dice03.jpg'
import four from '../assets/Dice04.jpg'
import five from '../assets/Dice05.jpg'
import six from '../assets/Dice06.jpg'

const Dice = ({ onRolledNumberChange }) => {
    
    const [diceRoll, setDiceRoll] = useState(null)
    const [rolledNumber, setRolledNumber] = useState(null);
    const [count, setCount] = useState(0)
    
    const diceRollRoll = [one, two, three, four, five, six];

    const changeRoll = () => {
        const randomDiceRoll = Math.floor(Math.random()*diceRollRoll.length)

        setDiceRoll(diceRollRoll[randomDiceRoll])
        setRolledNumber(randomDiceRoll + 1);
        setCount(count + 1)
        onRolledNumberChange(randomDiceRoll + 1);
    }

  return (
    <>
        <div className="lastRoll"> 
        
            <h3>Last Rolled: {rolledNumber}</h3>
            <h3>Rolls Rolled: {count}</h3>
            
            <br />
            <div className="box" onClick={changeRoll}>
                {diceRoll && <img src={diceRoll} style={{ width: '100%' }} alt="Dice" />}
            </div>

        </div>
    </>
  )
}
export default Dice