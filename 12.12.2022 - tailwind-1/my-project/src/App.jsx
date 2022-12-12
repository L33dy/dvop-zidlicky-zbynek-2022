import { useState } from 'react'
import reactLogo from './assets/react.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>

        <div className="bg-green-300 md:bg-blue-700 text-red-400 md:text-black p-10 mt-10 shadow-lg shadow-orange-400 w-1/2 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate distinctio eius ex facere, iusto maxime nulla officia qui quidem saepe?
        </div>
    </div>
  )
}

export default App
