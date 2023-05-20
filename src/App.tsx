import { useState } from "react"
import Scene from "./components/scene/scene"
import { StyledBody } from "./styled"
import { Button } from "./components/button/button";
import { Welcome } from "./components/scene/welcome";


function App() {
  const [hello, setHello] = useState(true)  
  function handleWelcome() {
    setHello(false)
    console.log('hola', useState)
  }

  return (
    
    <StyledBody>
      {hello ?  <Welcome> <Button btnText="Click Here" background="#cf00ff" handleClick={handleWelcome}/> </Welcome> : <Scene />}
    </StyledBody>
  )
}

export default App
