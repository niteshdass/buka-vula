import React, { Component } from 'react'
import Title from './Title.js'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'

export default class Services extends Component {
    state={
        Services:[
            {icon:<FaCocktail/>,
             title:"Free Cocktail",
            info:"Note that the development build is not optimized.",},

            {icon:<FaHiking/>,
                title:"Free Cocktail",
               info:"Note that the development   build is not optimized.",},

               {icon:<FaShuttleVan/>,
                title:"Free Cocktail",
               info:"Note that the development build is not optimized.",},

               {icon:<FaBeer/>,
                title:"Free Fbeer",
               info:"Note that the development build is not optimized.",},
        ]
    }
    render() {
        return (
            <section className="services">
                
                <Title title="Services"/>

                <div className="services-center">
                    {this.state.Services.map( (item,index)=>{
                        return <article key="index" className="service">
                                <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                        </article>
                    } )}

                </div>
            </section>
        )
    }
}
