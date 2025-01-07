import React from 'react'
import Comingsoon from '../../components/Comingsoon/Comingsoon'
import Nowshows from '../../components/Nowshows/Nowshows'
import Herosection from '../../components/Herosection/Herosection'

const Home = () => {
  return (
    <div className='home-container'>

<div className="now-showing">
  <Herosection/>
    <Comingsoon/>
    <br />
    <Nowshows/>
</div>


    </div>
  )
}

export default Home