import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
  } from "react-router-dom";
import { Redirect ,withRouter } from "react-router-dom";
import Dashboard from './Dashboard';
import Navbar from './layout/Navbar';
import Sidebar from './layout/Sidebar';
import Footer  from './layout/Footer';
import AddStudent from './student/AddStudent';
import Student from './student/Student';

export default function Home() {

  const login = localStorage.getItem("isLoggedIn");
  if (!login) {
    return <Redirect to="/" />;
  }
  
  return (
    <>
    <Router>
     <Navbar/>
     <Sidebar/>
           <Switch>
               <Route exact path="/student">
               <Student/>
               </Route>
               <Route exact path="/add-student">
               <AddStudent/>
               </Route>
               <Route exact path="/home">
                  <Dashboard/>
               </Route>
           </Switch>
       <Footer/>
       
     </Router>
   </>
  )
}


