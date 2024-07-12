import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './pages/Menu';
import Schedule from './pages/Schedule';
import Home from './pages/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"element={<Home/>} />
          <Route path="/schedule" element={<Schedule/>} />
          <Route path="/Menu"element={<Menu/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
