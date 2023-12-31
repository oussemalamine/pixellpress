import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LeftMenu from './Components/LeftMenu'
import ButtonBar from "./Components/ButtonBar";



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container-fluid">
      <div className="row">
        <LeftMenu />
        <div className="col-md-9">
          <h1>Main Content</h1>
        </div>
        <ButtonBar></ButtonBar>
      </div>
    </div>
    </>
  )
}

export default App
