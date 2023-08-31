import React, { Component, useState } from 'react';
import axios from 'axios'
import { Localhost, LoginVariables } from '../Variables.js';
import $ from 'jquery';
import { LoginError } from '../Message.js';
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const navigate = useNavigate();
  
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
    $("#err").hide();

    //Check empty
    if (info.username == '' || info.password == '') {
      $("#err").text(LoginError.Empty);
      $("#err").show();
    } else {
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
        .then((response) => {
          console.log(response.data)
          if (response.data == 0) {
            $("#err").text(LoginError.Invalid);
            $("#err").show();
          }
        });
    }
  };

  const GetAccount = async () => {
    console.log(info);
    await axios.get(Localhost.localhost + LoginVariables.GetAccount)
      .then((response) => {
        console.log(response.data);
      });

      navigate('/main');
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

        <div>
          <span id="err" style={{ display: 'none' }}></span>
        </div>

        <div>
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

};