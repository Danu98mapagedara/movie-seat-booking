import React from 'react'
import Comingsoon from '../../components/Comingsoon/Comingsoon'
import Nowshows from '../../components/Nowshows/Nowshows'

const Home = () => {
  return (
    <div className='home-container'>

<div className="now-showing">
    <Comingsoon/>
    <br />
    <Nowshows/>
</div>


    </div>
  )
}

export default Home