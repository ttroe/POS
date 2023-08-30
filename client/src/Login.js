import React, { Component, useState } from 'react';
import axios from 'axios'
import { Localhost, LoginVariables } from './Variables.js';


export default function Login() {
  // const loginList = {
  //   username: "",
  //   password: "",
  // };

  //const [username, setusername] = useState();
  // const handleChange = (event) => {
  //   setusername(event.target.value);
  //   console.log(username);
  // };

  const [info, updateinfo] = useState({
    username: "",
    password: "",
  });

  const infoChange = (e) => {
    if (e.target.name == "uname") {
      updateinfo({
        username: e.target.value,
        password: info.password,
      })
    } else if (e.target.name == "pass") {
      updateinfo({
        username: info.username,
        password: e.target.value,
      })
    }
  };


  const Login = async () => {
    console.log(info);
    await axios.post(Localhost.localhost + LoginVariables.Login,
      {
          LoginName: info.username,
          Password: info.password,
      },
      {
        headers: {
          'Accept': 'application/json',
          
          'Content-Type': 'application/json'
        },
      }
    )
     .then((response) => { console.log(response.data) });

    // await axios.post(Localhost.localhost + LoginVariables.Login + 
    //   "?username=" + info.username + "&password=" + info.password)
    //.then((response) => {console.log(response.data)});
  };

  const GetAccount = async () => {
    console.log(info);

    await axios.get(Localhost.localhost + LoginVariables.GetAccount)
      .then((response) => {
        console.log(response.data);
      });
  };


  return (
    <div className="form">
      <form>
        <div className="input-container">
          <label>Username: </label>
          <input type="text" name="uname" value={info.username} onChange={infoChange} required />
        </div>

        <div className="input-container">
          <lable>Password: </lable>
          <input type="password" name="pass" value={info.password} onChange={infoChange} required />
        </div>

        <div className="button-container">
          <button type="button"
            className="btn btn-primary m-2"
            onClick={() => Login()}>
            Login
          </button>
        </div>

        <div className="button-container">
          <button type="button"
            className="btn btn-primary m-2"
            onClick={() => GetAccount()}>
            Get Account
          </button>
        </div>
      </form>




    </div>
  )

}
