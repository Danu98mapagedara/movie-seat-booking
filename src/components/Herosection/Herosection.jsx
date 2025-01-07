import React, { useState, useEffect } from 'react';
import images  from '../../constants/images'
import { Link } from 'react-router-dom';
import './Herosection.css'
import { motion } from "framer-motion";
const Herosection = () => {

   

    const movies =[
        
            {
              id:1,
              name: "Viduthalai Part 2",
              image: images.vidu,
             description:"An unassuming school teacher faces extreme circumstances, forcing him to take up arms and lead a fiery rebellion against oppression, becoming an unlikely leader."
            },
            {
              id:2,
              name: "Wicked",
              image: images.wicked,
          description:'Elphaba, a misunderstood young woman because of her green skin, and Galinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads.'
            },
            {
              id:3,
              name: "Solo Town",
              image: images.solotown,
              description:"Asanjaya,Sanjana,Heshan,Nonim and Yulan are the 5 members of Sri Lanka's leading boy band SOLO TOWN.The band's journey is shaped and unfolds against the backdrop of fame, friendships,relationships,mistakes,betrayals,selfishness and love."
             
            },
           
            
          
          ]
          const [currentMovie, setCurrentMovie] = useState(0);

          useEffect(() => {
              const interval = setInterval(() => {
                  setCurrentMovie((prev) => (prev + 1) % movies.length);
              }, 5000); // Change every 5 seconds
              return () => clearInterval(interval);
          }, [movies.length]);
   
  return (
     <div
            className="hero-container"
            style={{
                backgroundImage: `url(${movies[currentMovie].image})`,
                objectFit:"contain",
                alignContent:'center',
                justifyContent:'center',
               alignItems:"center"
            }}
        >
            <div className="hero-content">
                <div className="hero-image">
                    <img src={movies[currentMovie].image} alt={movies[currentMovie].name} />
                </div>
                <div className="hero-description">
                    <h1>{movies[currentMovie].name}</h1>
                    <p>{movies[currentMovie].description}</p>

                    <br />
                    <Link to="/bookseat/2">
                    <motion.button
            className="hero-btn"
            whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
            }}
        >
            Book Your Seat
        </motion.button>
                </Link>
                </div>
               
            </div>
        </div>
    );
};

export default Herosection