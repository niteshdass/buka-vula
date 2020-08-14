import React from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import Loading from "./Loading"
import {withRoomConsumer} from "./Context"

function RoomContainer({context}){
    const{loading,sortedRooms,rooms}=context;

    if(loading){
        return <Loading />
    }
    return(
        < >  
        <RoomFilter rooms={rooms}/>
        <RoomList rooms={sortedRooms}/>

    </ >
    
    );

}
export default withRoomConsumer(RoomContainer);








/**
 * 
 * import React from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import Loading from "./Loading"
import {RoomConsumer} from "./Context"
export default function RoomContainer() {
    return (
        <RoomConsumer>
            {
                value=>{
                    console.log(value);
                    const{loading,sortedRooms,rooms}=value;
                    return(
                        <div> 
                        <RoomFilter rooms={rooms}/>
                        <RoomList rooms={sortedRooms}/>

                    </div>
                    
                    );
                }
            }
        
        
        </RoomConsumer>
    );
}

 */