import { useState, useMemo } from 'react'
import './App.css'

function App() {
  const [mattestykke, setMattestykke] = useState([])
  const sum = useMemo(() => {
    try{
      return window.eval(mattestykke)
    }catch(e){return "Invalid syntax"}}, [mattestykke])

  return (
    <div className="App">Nice
    <h1>{mattestykke}</h1>
    <input onChange={e => setMattestykke(e.target.value)} value={mattestykke} />
    ={sum}
    </div>
  )
}

export default App
