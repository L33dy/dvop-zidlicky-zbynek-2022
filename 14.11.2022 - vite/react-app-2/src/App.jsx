import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import ListItem from "./components/ListItem.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <ul>
            <ListItem text="WBA" />
            <ListItem text="PVA" />
            <ListItem text="MAT" />
            <ListItem text="DVOP" />
            <ListItem text="VYP" />
        </ul>
      </div>
  )
}

export default App
