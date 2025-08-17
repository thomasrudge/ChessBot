import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import Board1 from './components/Board1'


function App() {
  
  const [page, setPage] = useState("b1")

  return (
    <>
      {page === "b1" && (
        <>
          <div className='board'>
            <Board1 />
          </div>
        </>
      )}
    </>
  )
}

export default App


