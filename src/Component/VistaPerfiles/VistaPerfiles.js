import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './VistaPerfiles.css';
import LoginPassword from '../LoginPassword/LoginPassword';
import LoginTelefono from '../LoginTelefono/LoginTelefono';

class VistaPerfiles extends Component {
    render () {
        return (
        <div className="container">
            <div className= "container-fluid">
                <div className= "vertical-line"></div>
                <div className= "vertical-line-right"></div>
                <div className= "vertical-line-left"></div>
                <div className= "vertical-line-ligth"></div>
                <img className= "bus-img" src="https://github.com/YocelinGR/here-hack/blob/master/src/assets/bus.png?raw=true" alt="bus-icon" />
                <h1 className= "letter">School Security</h1>
            </div>
            <div className="row">
                <div className="row">
                <a className= "btn-padre" id="padre"><Link to='/LoginTelefono'>Padre de familia</Link></a>
                </div>
                <div className="row">
                <a className= "btn-conductor" id="conductor"><Link to='/LoginPassword'>Conductor</Link></a>
                </div>
            </div>
        </div>
    );
    }
}

export default VistaPerfiles;