import React,{useEffect,useState} from 'react'
import './Navbar.css'
import { NavLink,Link } from 'react-router-dom'
import images from '../../constants/images'
import { useLocation } from 'react-router-dom'
import { color, motion } from 'framer-motion'
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {
  const [open,setOpen] = useState(false)
  const location = useLocation()
  const [blur, setBlur] = useState(false);
    const changeScrollEff = () => {
      if(window.scrollY >= 100){
        setBlur(true);
      }else{
        setBlur(false);
      }
  }
  const handleopen = () => {
    setOpen(!open)
  }
  const getMenuStyle = (open) => {
    if (document.documentElement.clientWidth <= 980) {
      return { left: open ? 0 : "-100%" };
    }
  };
  useEffect(() => {
    window.scroll(0,0)
  }, [location.pathname])

  window.addEventListener('scroll', changeScrollEff);

  return (
    <motion.section initial={{y:-100,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1}}  className={blur ? "navbar-container blur" : "navbar-container"}>
      <div className="logo">
        <Link to={'/'}>
          <img src={images.logo} width={100} alt="" />
        </Link>
      </div>
      <div className="nav-links" style={getMenuStyle(open)}>
        <NavLink to="/" className="nav-link" onClick={handleopen}>Home</NavLink>
        <NavLink to="/solution" className="nav-link" onClick={handleopen}>Movies</NavLink>
       
        <NavLink to="/about" className="nav-link" onClick={handleopen}>About Us</NavLink>
        <NavLink to="/about" className="nav-link" onClick={handleopen}>Offers</NavLink>
        <NavLink to="/contact" className="nav-link" onClick={handleopen}>Contact Us</NavLink>
        <NavLink to="/contact" className="nav-link" onClick={handleopen}>Tickets</NavLink>

        
        
      </div>
      <div className="nav-link-btn" onClick={handleopen}>
        {!open? 
        <IoMenu size={30} color='#fff'/>:<IoMdClose size={30} color='#fff'/>
      }
      </div>
    </motion.section>
  )
}

export default Navbar