import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import './App.css';
import RouterProvider from './RouterProvider';
import axios from 'axios';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';

export class App extends Component {

  constructor(){
    super();
    this.state = {
      email:'',
      password:'',
      error_msg:'',
      redirect: false,
      isLoding:false
    }

}

handleInput = (e) => {
  this.setState({[e.target.name]: e.target.value});
 }

 postLogin = async (e) => {
  e.preventDefault();
        await axios.post(process.env.REACT_APP_API_URL+"/admin/login", this.state).then((response) => {
           localStorage.setItem("isLoggedIn", true);
           localStorage.setItem("userData", JSON.stringify(response.data.data));
           this.setState({error_msg: ''});
           this.setState({redirect: true}); 
          }).catch((error) => {
            this.setState({error_msg: error.response.data.error});
        });
} 

onLogoutHandler = () => {
  localStorage.clear();
  this.setState({
    redirect: false,
    });
  
};


  render() {
    const login = localStorage.getItem("isLoggedIn");
    if (login) {
      return (
        <>
          <Router>
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
            <Sidebar />
          <RouterProvider/>
          <Footer />
          </Router>
        </>
      )
    }

    if (this.state.redirect) {
      return (
        <>
            
          <Router>
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
            <Sidebar />
          <RouterProvider/>
          <Footer />
          </Router>
        </>
      )
    }else{
      return (
        <>
 
        <div id="loginform">
            <h2 id="headerTitle">Login {process.env.REACT_APP_NOT_SECRET_CODE}</h2>
            <div>
             <form onSubmit={this.postLogin}>
             { this.state.error_msg ?<p className="text-danger text-center">{this.state.error_msg}</p> : '' } 
             <div className="row login_input">
              <label>Email</label>
                <input type='email' name='email' placeholder='Enter Email' value={this.state.email}  onChange={this.handleInput}/>
               </div>  
               <div className="row login_input">
                <label>Password</label>
                 <input type='password' name='password' placeholder='Enter Password' value={this.state.password}  onChange={this.handleInput}/>
                </div>  
                <div id="button" className="row login_input">
                  <button>Login</button>
                  </div>
             </form>
           </div>
      </div>
 
        </>
     )
    }
 
    

  }
}

export default App