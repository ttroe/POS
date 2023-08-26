import React, { Component } from 'react';
import { LoginVariables } from './Variables.js';


export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departments: [],
      modalTitle: "",
      DepartmentName: "",
      DepartmentId: 0,

      DepartmentIdFilter: "",
      DepartmentNameFilter: "",
      departmentsWithoutFilter: []
    }
  }

  GetAccount() {
    fetch(LoginVariables.GetAccount)
      .then(response => response.json())
      .then(data => {
        this.setState({ departments: data,  });
    });
  }

  render() {
    const {
      departments,
      modalTitle,
      DepartmentId,
      DepartmentName
    } = this.state;

    return (
      <div>
        <button type="button"
          className="btn btn-primary m-2 float-end"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={() => this.GetAccount()}>
          Get Account
        </button>

      </div>
    )
  }
}
