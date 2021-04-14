import React, { useState }  from "react";
import bridgeBuildersLogo from '../bridgeBuildersLetterHeadLogo.png'
import '../App.css';
import HeaderAdmin from './HeaderAdmin'
import AddStudents from './AddStudents'
import {
    BrowserRouter as Router,
    Switch,
    Route, Link, useParams
  } from "react-router-dom";

function Admin() {
    const [password, setPassword] = useState('')
    const [passwordCheck, setPasswordCheck] = useState(false)
    const [passwordIncorrect, setPasswordIncorrect] = useState(false)
    const axios = require('axios').default;
    const handlePasswordSubmit = (e) => {
      e.preventDefault();


      axios.post('/auth', {
        'password': password
      })
      .then(function (response) {
        console.log(response.data)
        if (response.data === '1') {
          setPasswordCheck(true)
          setPasswordIncorrect(false)
        }else{
          setPasswordCheck(false)
          setPasswordIncorrect(true)
          setPassword('')
        }
      })
    }
    const setPasswordHandler = (e) => {
      setPassword(e.target.value)
    }

    return (
      <div>
      { passwordCheck ?
      <div>
        <HeaderAdmin/>
        <AddStudents/>

      </div>
      
      :
      <div>
        <HeaderAdmin/>
        <div className="infographicBlock">
          <div className="flexContainer">
            <div className="flexside"></div>
            <div className="flexpassword">
              <form onSubmit={handlePasswordSubmit}>
              <div class="form-group">
              {/* <div class="form-group row"> */}
              {/* <div class="col-sm-10"> */}
              <label for="passwordInput">Password:</label>

              <input class="form-control" id="passwordInput" type="password" onChange={setPasswordHandler} name="password"/>

              <input type="submit" class="btn btn-dark" value="Sign in"/>
              {passwordIncorrect ? <h3>Incorrect Password</h3> : ''}
              </div>
              
              
              
              </form>
            </div>
            <div className="flexside"></div>
          
        </div>
      </div>
      </div>
    }
    </div>


    )
  }

export default Admin