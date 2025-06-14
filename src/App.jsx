import { useState } from "react"
import "./App.css"

const App = () => {
  let [userInputs, setUserInputs] = useState({
    adjective: "________",
    weapon: "________",
    emotion: "________",
    sound: "________",
    wrestler: "________",
    noun: "________",
  })

  /**
    { 
      adjective: "fluffy", 
      weapon: "chair", 
      ...
    }
  **/

  // use for all inputs
  const updateInput = (event) => {
    setUserInputs({
      ...userInputs,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <div id="container">
      <div id="input-block">
        <label>
          Adjective:
          <input type="text" name="adjective" onChange={updateInput} />
        </label>
        <label>
          Weapon:
          <input type="text" name="weapon" onChange={updateInput} />
        </label>
        <label>
          Sound:
          <input type="text" name="sound" onChange={updateInput} />
        </label>
        <label>
          Emotion:
          <input type="text" name="emotion" onChange={updateInput} />
        </label>
        <label>
          Wrestler:
          <input type="text" name="wrestler" onChange={updateInput} />
        </label>
        <label>
          Noun:
          <input type="text" name="noun" onChange={updateInput} />
        </label>
      </div>
      <div id="story-block">
        <section>
          It was a {userInputs.adjective} night in Care-a-Lot when Cheer Bear
          entered the ring, clutching a {userInputs.weapon}. Across from them
          stood Grumpy Bear, visibly {userInputs.emotion} and ready to rumble.
        </section>
        <section>
          Suddenly, the clouds burst with a deafening {userInputs.sound}, and{" "}
          {userInputs.wrestler}
          fell from the sky like a sparkly meteor. But instead of a smackdown,
          they all paused... and shared a {userInputs.noun}.
        </section>
        <section>
          The audience exploded with joy. Classic Care Bear chaos.
        </section>
      </div>
    </div>
  )
}

export default App
