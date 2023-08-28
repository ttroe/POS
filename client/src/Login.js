import React, { Component } from 'react';
import axios from 'axios'
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

  GetAccount1() {
    fetch(LoginVariables.GetAccount)
      .then(response => response.json())
  }

  GetAccount(){
    axios.get(LoginVariables.GetAccount).then((response) => {
      console.log(response.data);
    });
  }


  render() {

    return (
      <div>
        <button type="button"
          className="btn btn-primary m-2 float-end"
          // data-bs-toggle="modal"
          // data-bs-target="#exampleModal"
          onClick={() => this.GetAccount()}>
          Get Account
        </button>

      </div>
    )
  }
}
