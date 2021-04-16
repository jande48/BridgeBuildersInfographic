import React, { useState }  from "react";
import bridgeBuildersLogo from '../bridgeBuildersLetterHeadLogo.png'
import '../App.css';
import AddData from './AddData'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

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

        <div>
          <div className="flexContainer">
            <div className="flexside">
              <a href="https://www.bridgebuildersla.org/"><img src={bridgeBuildersLogo} alt="Bridge Builders" className="headerImg"/></a>
            </div>
            <div className="flexmiddle"></div>
            <div className="flexsideHeader">
              <Link to="/"><div className="adminLink"><h2>Home</h2></div></Link>
            </div>
          </div>
        </div>

        <AddData/>

      </div>
      
      :
      <div>
        <div>
          <div className="flexContainer">
            <div className="flexside">
              <a href="https://www.bridgebuildersla.org/"><img src={bridgeBuildersLogo} alt="Bridge Builders" className="headerImg"/></a>
            </div>
            <div className="flexmiddle"></div>
            <div className="flexsideHeader">
              <Link to="/"><div className="adminLink"><h2>Home</h2></div></Link>
            </div>
          </div>
        </div>
        <div className="infographicBlock">
          <div className="flexContainer">
            <div className="flexside"></div>
            <div className="flexpassword">
              <form onSubmit={handlePasswordSubmit}>
                <div class="form-group">
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