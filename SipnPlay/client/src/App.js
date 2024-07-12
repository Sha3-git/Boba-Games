import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './pages/Menu';
import Schedule from './pages/Schedule';
import CalEvent from './components/CalEvent';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/schedule" element={<Schedule/>} />
          <Route path="/Menu"element={<Menu/>} />
        </Routes>

        <CalEvent />
      </BrowserRouter>
    </>
  );
}

export default App;
