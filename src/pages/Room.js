import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner.js'
import {Link} from 'react-router-dom'
import RoomContainer from '../components/RoomContainer.js'
function Room () {
    return (
        <>
        <Hero hero="roomsHero">
            <Banner title="Our Rooms">
                <Link to="/" className="btn-primary">
                Return-home
                </Link>
            </Banner>
        </Hero>
        <RoomContainer/>
        </>
    )
}
export default Room;