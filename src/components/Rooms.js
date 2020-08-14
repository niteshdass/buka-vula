import React from 'react'
import {Link} from 'react-router-dom';

export default function Rooms({room}) {
    const {name,slug,images,price} = room;

   
    return (
        <article className="room">
            <div className="img-container">
                <img src={images[0]} alt="helllo feature"/>
                <div className="price-top">
                    <h6>${price}</h6>
                    <p>Per-day</p>
                </div>
                <Link to={`/room/${slug}`} className="btn-primary room-link">
                    Feature,s
                </Link>
    <p className="room-info">{name}</p>
            </div>
        </article>
    )
}
 