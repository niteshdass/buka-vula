import React from 'react'
import Banner from '../components/Banner.js'
import {Link} from 'react-router-dom'
import Services from '../components/Services.js'
import Hero from '../components/Hero.js'
import Featcher from '../components/Featcher.js'
 function Home   ()  {
    return (
        <>
        <Hero>
            <Banner title="Luxuries Room" subtitle="Deluxe room starting at 200$ ">
                <Link to="/room" className="btn-primary">Our Room
                </Link>
            </Banner>
            
        </Hero>
        <Services/>
        <Featcher/>
        </>
    )
}
export default Home;
