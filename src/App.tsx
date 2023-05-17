import Scene from "./components/scene/scene"
import data from "./components/data"

function App() {

  return (
    <>
      {
        data.map((line, index) => (
          <Scene key={index} text={line} />
        ))
      }
    </>
  )
}

export default App
