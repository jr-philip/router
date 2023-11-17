import  React from 'react'
import './App.css'
import { Link, Route, Routes} from "react-router-dom"
import New from './ccompoent/New'
import Book from './ccompoent/Book'

function App() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">New</Link></li>
          <li><Link to="/book">Book</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<New/>}/>
        <Route path='/book' element={<Book/>}/>
      </Routes>
    </>
  )
}

export default App
