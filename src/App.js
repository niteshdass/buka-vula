 import React, { Component } from 'react';
 import Home from './pages/Home.js';
 import './App.css';
 import Room from './pages/Room.js';
 import SingleRoom from './pages/SingleRoom.js';
 import Error from './pages/Error.js';
 import {Route,Switch} from 'react-router-dom';
 import Navber from './components/Navber.js';

 export default class App extends Component {

 
     render() {
        
        
         return (
             <> 
             <Navber/>
                <Switch>

                <Route exact path="/" component={Home}/>
                <Route exact path="/room/" component={Room}/>
                <Route exact path="/room/:slug" component={SingleRoom}/>
                <Route component={Error}/>
                </Switch>
               
             </>
         )
     }
 }
 

