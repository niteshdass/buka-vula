import React from 'react'
import lodingGif from "../images/gif/loading-arrow.gif";
export default function () {
    return (
        <div className="loading">
            <h4>Data is Loading...</h4>
            <img src={lodingGif} alt=""/>
        </div>
    )
}
