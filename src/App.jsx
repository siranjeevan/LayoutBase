import { BrowserRouter , Route, Routes } from 'react-router-dom'
import HomePage from './Screen/HeaderScreen.jsx'
// import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/destination" element={<h1>Destination Page</h1>} />
        <Route path="/experience" element={<h1>Experience Page</h1>} />
        <Route path="/about" element={<h1>About Us Page</h1>} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
