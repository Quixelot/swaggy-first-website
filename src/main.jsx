import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,

} from "react-router-dom"
import Goofy from './components/Goofy.jsx'
 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' exact  element={<App></App>}/>
        <Route path='/personaone'  element={<Goofy></Goofy>}/>

      </Routes>
    </Router>
  </StrictMode>,
)
