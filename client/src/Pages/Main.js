import React, { Component, useState } from 'react';
import axios from 'axios'
import { Localhost, LoginVariables } from '../Variables.js';
import $ from 'jquery';
import { LoginError } from '../Message.js';


export default function Main() {

  return (
    <div className="form">
      <form>
        <div className="input-container">
          <label>Main212 </label>
          <input type="text" name="uname"  required />
        </div>
      </form>




    </div>
  )

};