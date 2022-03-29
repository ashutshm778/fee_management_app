import React, { Component } from 'react'
import {Redirect, withRouter } from "react-router-dom";

export class Navbar extends Component {

    state = {
        navigate: false,
      };


    onLogoutHandler = () => {
        localStorage.clear();
        this.setState({
            navigate: true,
          });
        
      };

  render() {
    if (this.state.navigate) {
        return <Redirect to="/" />;
      }
    return (
            
                <nav className="main-header navbar navbar-expand navbar-white navbar-light">

                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" data-widget="pushmenu" href="index3.html"   role="button"><i className="fas fa-bars"></i></a>
                            </li>
                            <li className="nav-item d-none d-sm-inline-block">
                                <a href="index3.html" className="nav-link">Home</a>
                            </li>
                           
                        </ul>


                    <ul className="navbar-nav ml-auto">

                        <button className="btn btn-primary text-right" onClick={this.onLogoutHandler}>Logout</button>
                    </ul>
                </nav>          
            
    )
  }
}

export default Navbar