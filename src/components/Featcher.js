import React, { Component } from 'react'
 import {RoomContext} from "./Context"
import Loading from "./Loading"
import Rooms from "./Rooms"
import Title from "./Title"
export default class Featcher extends Component {
 static contextType = RoomContext;
 
 
    render() {
    let {loading,featureedRooms : rooms}=this.context
        rooms=rooms.map(room =>{
            return <Rooms key={room.id} room={room}/>
        });
         
        return (
            <section className="featured-rooms">
                <Title title="Featured Rooms"/>
                <div className="featured-rooms-center">
                    {loading? <Loading/>:rooms}
                </div>
            </section>
        )
    }
}
