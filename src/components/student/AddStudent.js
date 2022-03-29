import React, { Component } from 'react'
import axios from "axios";
import { withRouter } from 'react-router-dom'

export class AddStudent extends Component {

  state = {
    adm_no: '',
    name: '',
    f_name: '',
    dob: '',
    class: '',
    section: '',
    email: '',
    password: '',
 }

 handleInput = (e) => {
  this.setState({[e.target.name]: e.target.value});
 }

saveAdmission = async (e) => {
  e.preventDefault();
  const login = JSON.parse(localStorage.getItem("userData"));
  var token=login.token;
  const config = {
    headers: { Authorization: `Bearer `+token}
   };
        await axios.post(process.env.REACT_APP_API_URL+"/admin/student_store", this.state,config).then((response) => {
            this.props.history.push("/student");
            }).catch((error) => {
             
          });
}

  showPassword = () => {
    var x = document.getElementById("password");
    var y=document.getElementById("password_icon")
    if (x.type === "password") {
      x.type = "text";
      y.className ="fa fa-eye";
    } else {
      x.type = "password";
      y.className ="fa fa-eye-slash";
    }
   }

  
  render() {
    return (
      <div className="content-wrapper">
      <section className="content">
          <br></br>
          <div className="card card-primary">
              <div className="card-header">
                  <h3 className="card-title">Student Admission</h3>
              </div>
  
              <form onSubmit={this.saveAdmission}>
                  <div className="card-body row">
                    
                      <div className="form-group col-md-6">
                          <label htmlFor="exampleInputAdmission">Admission No</label>
                          <input type="text" name="adm_no"  className="form-control" onChange={this.handleInput} id="exampleInputAdmission" placeholder="Enter Admission No" />
                      </div>
  
                      <div className="form-group col-md-6">
                          <label htmlFor="exampleInputName">Name</label>
                          <input type="text" name="name" className="form-control" onChange={this.handleInput} id="exampleInputName" placeholder="Enter Name" />
                      </div>
                      <div className="form-group col-md-6">
                          <label htmlFor="exampleInputFatherName">Father Name</label>
                          <input type="text" name="f_name" className="form-control" onChange={this.handleInput} id="exampleInputFatherName" placeholder="Enter Father Name" />
                      </div>
  
                      <div className="form-group col-md-6">
                          <label htmlFor="exampleInputDOB">DOB</label>
                          <input type="date" name="dob" className="form-control" onChange={this.handleInput} id="exampleInputDOB" placeholder="Enter DOB" />
                      </div>
                     
                          
                              <div className="form-group col-md-6">
                                  <label>Class</label>
                                  <select className="form-control select2" name="class" onChange={this.handleInput}>
                                      <option value="">Select Class</option>
                                      <option>Class 1</option>
                                      <option>Class 2</option>
                                      <option>Class 3</option>
                                  </select>
                              </div>
                          
                              <div className="form-group col-md-6">
                                  <label>Section</label>
                                  <select className="form-control select2" name="section" onChange={this.handleInput}>
                                      <option value="">Select Section</option>
                                      <option>A</option>
                                      <option>B</option>
                                      <option>C</option>
                                  </select>
                              </div>
                          
  
                      <div className="form-group col-md-6">
                          <label htmlFor="exampleInputEmail1">Email Address</label>
                          <input type="email" name="email" className="form-control" onChange={this.handleInput} id="exampleInputEmail1" placeholder="Enter Email" />
                      </div>
                      <div className="form-group col-md-6">
                          <label htmlFor="password">Password</label>
                          <div className="input-group"  data-target-input="nearest">
                          <input type="password" name="password" className="form-control" onChange={this.handleInput} id="password"  placeholder="Enter Password" />
                          <div className="input-group-append" onClick={this.showPassword}>
                            <div className="input-group-text"><i className="fa fa-eye-slash" id="password_icon" ></i></div>
                        </div>
                        </div>
                      </div>
                  </div>

                  <div className="card-footer">
                      <button type="submit" className="btn btn-primary">Submit</button>
                  </div>
              </form>
          </div>
       </section>
  
    </div>
    )
  }
}

export default withRouter(AddStudent);