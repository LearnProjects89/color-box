import React, {useState} from "react"
import "../App.css"
import one from '../assets/Dice01.jpg'
import two from '../assets/Dice02.jpg'
import three from '../assets/Dice03.jpg'
import four from '../assets/Dice04.jpg'
import five from '../assets/Dice05.jpg'
import six from '../assets/Dice06.jpg'

const Dice = () => {
    
    const [diceRoll, setDiceRoll] = useState(null)
    const [rolledNumber, setRolledNumber] = useState(null);
    const [count, setCount] = useState(0)
    
    const diceRollRoll = [one, two, three, four, five, six];

    const changeRoll = () => {
        const randomeDiceRoll = Math.floor(Math.random()*diceRollRoll.length)

        setDiceRoll(diceRollRoll[randomeDiceRoll])
        setRolledNumber(randomeDiceRoll + 1);
        setCount(count + 1)
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