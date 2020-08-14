import React from 'react'
import Hero from '../components/Hero.js'
import Banner from '../components/Banner.js'
import {Link} from 'react-router-dom'
function Error ()  {
    return (
        <Hero >
            <Banner title="404 Found" subtitle="Page not found">
                <Link to="/" className="btn-primary">Go to home</Link>
            </Banner>
        </Hero>
        
    )
}
export default Error;