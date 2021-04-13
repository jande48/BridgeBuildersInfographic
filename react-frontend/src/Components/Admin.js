import React from "react";
import bridgeBuildersLogo from '../bridgeBuildersLetterHeadLogo.png'
import '../App.css';
import Home from './Home'

import {
    BrowserRouter as Router,
    Switch,
    Route, Link, useParams
  } from "react-router-dom";
function Admin() {
    let {id} = useParams()
    console.log(id)
    return (
    <div>
        <div className="flexContainer">
          <div className="flexside">
            <a href="https://www.bridgebuildersla.org/"><img src={bridgeBuildersLogo} alt="Bridge Builders" className="headerImg"/></a>
          </div>
          <div className="flexmiddle"></div>
          <div className="flexside">
            <Link to="/home"><div className="adminLink"><h2>Home</h2></div></Link>
          </div>
        </div>
        <div className="infographicBlock">
          
        </div>
    </div>

    )
  }

export default Admin