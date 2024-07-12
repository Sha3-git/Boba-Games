import logo from "./logo.svg"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Menu from "./pages/Menu"
import Schedule from "./pages/Schedule"
import About from "./pages/About"
import Games from "./pages/Games"

import CalEvent from "./components/CalEvent"

import Home from "./pages/Home"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Calendar" element={<Schedule />} />
          <Route path="/about" element={<About />} />
          <Route path="/games" element={<Games />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
