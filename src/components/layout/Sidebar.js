import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Sidebar extends Component {
    constructor(){
        super();
        this.state = {
          dropdown : ''
        }

    }

    handleClick = () => {
        if(this.state.dropdown==''){
        this.setState({dropdown:' menu-open'});
        }
        else{
            this.setState({dropdown:''});
        }
    }
    
  render() {
    return (
     
          <aside className="main-sidebar sidebar-dark-primary elevation-4">
   
            <a href="index3.html" className="brand-link">
                <img src="#"  className="brand-image img-circle elevation-3" style={{opacity: .8}} />
                <span className="brand-text font-weight-light">3</span>
            </a>

  
            <div className="sidebar">
            
            
                    <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        
                        <li className="nav-item menu-open">
                        <Link to="/" className="nav-link active">
                            <i className="nav-icon fas fa-tachometer-alt"></i>
                            <p>
                            Dashboard
                            <i className="right fas fa-angle-left"></i>
                            </p>
                        </Link>
                        
                        </li>
                       
                        <li className={"nav-item" + this.state.dropdown} onClick={this.handleClick}>
                        <Link to="#" className="nav-link">
                            <i className="nav-icon fas fa-table"></i>
                            <p>
                            Student
                            <i className="fas fa-angle-left right"></i>
                            </p>
                        </Link>
                        <ul className="nav nav-treeview">
                            <li className="nav-item">
                            <Link to="/student" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>Add Student</p>
                            </Link>
                            </li>
                           
                        </ul>
                        </li>
                        
                    </ul>
                    </nav>
                
            </div>
 
         </aside>
    
    )
  }
}

export default Sidebar