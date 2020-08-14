import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import defaultBeg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from '../components/Banner';
import {RoomContext} from "../components/Context";
import StyledHero from "../components/StyledHero"
export default class SingleRoom extends Component {
    constructor(props){
        super(props);
       this.state={
           slug:this.props.match.params.slug,
           defaultBeg
       } 
    }
    static contextType= RoomContext;
    render() {
         
            const {getRoom} =this.context;
            const room =getRoom(this.state.slug);

            if(!room){
                return <div className="error">
                    <h3>No such e room</h3>
                    <Link to='/room' className="btn-primary">
                        Go To Room
                    </Link>
                </div>
            }
            const {
                name,description,capacity,size,price,extras,breakfast,pets,images
            }=room;

            const [MainImage,...dimg]=images;
            
            return (
                <>
                <StyledHero img={MainImage}>
                    <Banner title={`${name} room`}>
                        <Link to="/room" className="btn-primary">
                            go to rooms
                        </Link>
                    </Banner>
                </StyledHero>

                <section className="single-room">
                    <div className="single-room-images">
                        {
                            dimg.map( (item,index)=>{
                                return <img key={index} src={item} alt=""/>
                            })
                        }
                    </div>
                        <div className="single-room-info">
                            <article>
                                <h3>Details</h3>
                                <p>{description}</p>
                            </article>
                          <article className="info">
                           <h3>Info</h3>  
                           <h6>Price-${price}</h6> 
                            <h6>Size-{size}SQF</h6>
                            <h6>
                                Max-Capacity-{capacity} Pepole
                            </h6>
                            <h6>
                                Pets {pets? "Allowed":"not allow"}
                            </h6>
                            <h6>
                                 {breakfast? "Breakfast free Allowed":" "}
                            </h6>
                        </article>  




                        </div>


                </section>
        <section className="room-extras">
                <h6>Extras</h6>
                <ul className="extras">
                    {extras.map( (item,index) =>{

                    return <li key={index}>{item}</li>
                    
                    })}
                </ul>

        </section>

                </>
                
            )
       
            }  
}
