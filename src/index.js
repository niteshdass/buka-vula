import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App';
 import {RoomProvider} from './components/Context'
ReactDOM.render(
    <RoomProvider>
        <Router>
             <App/>
        </Router>
    </RoomProvider>,
     document.getElementById("root")
     );
