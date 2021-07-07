import React, { Component } from 'react'; //imrc
import "./navBar.css"

class NavBar extends Component { //cc
    state = {  };

    render() { 
        return ( 
        <nav className="navbar-page navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/#">Backpack Store</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/#">Catalog</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/#" tabIndex="-1" aria-disabled="true">About us</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>


         );
    }
}
 
export default NavBar;