import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export class Student extends Component {
  state = {
    students: [],
    loading: true,
  };
  fetchPosts = async () => {
    const login = JSON.parse(localStorage.getItem("userData"));
    var token = login.token;
    const config = {
      headers: { Authorization: `Bearer ` + token },
    };
    await axios
      .post(
        process.env.REACT_APP_API_URL + "/admin/student_index",
        this.state,
        config
      )
      .then((response) => {
        this.setState({ students: response.data.list.data });
        this.setState({ loading: false });
      })
      .catch((error) => {});
  };
  componentDidMount() {
    this.fetchPosts();
  }

 

  render() {
    return (
      <div className="content-wrapper">
        <section className="content">
          <br></br>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-9">
                <ol className="breadcrumb float-sm-left">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active">Student</li>
                </ol>
              </div>
              <div className="col-md-3">
                <div className="pull-right">
                  <Link to="/add-student" className="btn btn-block btn-primary">
                    Create New Category
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <div className="row">
                  <div className="col-md-6">
                    <h2>Students</h2>
                  </div>
                  <div className="col-md-6 d-flex justify-content-end">
                    <div className="card-tools">
                      <div className="input-group input-group-sm">
                        <input
                          type="text"
                          name="table_search"
                          className="form-control float-right"
                          placeholder="Search"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body table-responsive ">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Student Name</th>
                      <th>Email</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.students.map((student, index) => (
                      <tr key={student.id}>
                        <td>{index +1 }.</td>
                        <td>{student.name}</td>
                        <td>{student.email}</td>
                        <td>
                          <span className="badge bg-danger"></span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Student;
