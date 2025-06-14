import { useEffect, useState } from "react"
import "./App.css"
import { Inputs } from "./components/Inputs"
import { Story } from "./components/Story"

const App = () => {
  const [adjective, setAdjective] = useState("")
  const [weapon, setWeapon] = useState("")
  const [emotion, setEmotion] = useState("")
  const [sound, setSound] = useState("")
  const [wrestler, setWrestler] = useState("")
  const [noun, setNoun] = useState("")
  const [showStory, setShowStory] = useState(false)

  useEffect(() => {
    if (adjective && weapon && emotion && wrestler && noun) {
      setShowStory(true)
    }
  }, [adjective, weapon, emotion, wrestler, noun])

  return (
    <div id="container">
      <Inputs
        setAdjective={setAdjective}
        setWeapon={setWeapon}
        setEmotion={setEmotion}
        setSound={setSound}
        setWrestler={setWrestler}
        setNoun={setNoun}
      />
      {showStory ? (
        <Story
          adjective={adjective}
          weapon={weapon}
          emotion={emotion}
          sound={sound}
          wrestler={wrestler}
          noun={noun}
        />
      ) : (
        "Fill in all words to read the story!"
      )}
    </div>
  )
}

export default App
