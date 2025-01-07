import './App.css'
import { Routes , BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
// import Home from './pages/Home/Home'

import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import Bookseat from './pages/Bookseat/Bookseat'
import Cinema from './pages/Cinema/Cinema'


function App() {

  return (
    <>
      <Router>
        <Navbar/>
        { <Routes>
          <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/bookseat/:id" element={<Bookseat/>}/>
        <Route path="/cinemas" element={<Cinema/>}/>
        </Routes>}
         <Footer/> 
      </Router>
    </>
  )
}

export default App
