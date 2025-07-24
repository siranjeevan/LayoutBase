import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HeaderScreen from './Screen/HeaderScreen';
import Footer from './Components/Footer/main/FooterScreen.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <HeaderScreen /> */}
    <App />
    {/* <Footer /> */}
  </StrictMode>,
)
