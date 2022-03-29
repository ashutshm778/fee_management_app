import React, { Component } from 'react'
import axios from 'axios';
import { Redirect ,withRouter} from "react-router-dom";

export class Login extends Component {

state={
  email:'',
  password:'',
  redirect: false,
}

handleInput = (e) => {
  this.setState({[e.target.name]: e.target.value});
 }

postLogin = async (e) => {
  e.preventDefault();
        const res = await axios.post("https://exam.techuptechnologies.com/api/admin/login", this.state);
        if(res.status===200){
           localStorage.setItem("isLoggedIn", true);
           localStorage.setItem("userData", JSON.stringify(res.data.data));
           this.setState({redirect: true});     
          //  window.location.href='http://localhost:3000/home';
          return <Redirect to="/home" />;
        }

} 

  render() {
    if (this.state.redirect) {
      return <Redirect to="/home" />;
    }
    const login = localStorage.getItem("isLoggedIn");
    if (login) {
      return <Redirect to="/home" />;
    }
    
    // const FormButton = props => (
    //   <div id="button" className="row login_input">
    //     <button>{props.title}</button>
    //   </div>
    //   );
      
     

    return (
      <div id="loginform">
          <h2 id="headerTitle">Login</h2>
          <div>
            <form onSubmit={this.postLogin}>
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
    )
  }
}

export default withRouter(Login)