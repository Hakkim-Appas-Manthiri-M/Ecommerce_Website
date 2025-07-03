import {BrowserRouter, Routes, Route} from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hom from "../src/home.jsx"
import './App.css'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hom/>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
