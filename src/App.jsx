

import {Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Donate from './pages/Donate'
import AboutUs from './pages/AboutUs'
// import { MovieProvider } from "./contexts/MovieContext"
function App() {

  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/donate' element={<Donate />} />
          <Route path='/about-us' element={<AboutUs />} />
        </Routes>
      </main>
    </div>
  )
}


export default App
