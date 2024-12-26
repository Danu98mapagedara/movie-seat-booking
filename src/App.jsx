import './App.css'
import { Routes , BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
// import Home from './pages/Home/Home'
// import About from './pages/About/About'
// import Solution from './pages/Solution/Solution'
// import Blog from './pages/Blog/Blog'
// import Contact from './pages/Contact/Contact'
// import Sliderimages from './components/Sliderimages/Sliderimages'
import Footer from './components/Footer/Footer'


function App() {

  return (
    <>
      <Router>
        <Navbar/>
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>*/}
        <Footer/> 
      </Router>
    </>
  )
}

export default App
