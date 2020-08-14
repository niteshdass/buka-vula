import React from 'react'
import Rooms from './Rooms.js'
 
export default function RoomList({rooms}) {
    if(rooms.length === 0) {
        return (
            <div>
                <h3>Unfortunately no rooms matched search parameters</h3>
            </div>
        )

    }
   return <section className="roomslist">
       <div className="roomslist-center">{
       rooms.map( item =>{
           return <Rooms key={item.id}  room={item}/>
       })
}
       </div>
   </section>
}
