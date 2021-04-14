import React from "react";
import bridgeBuildersLogo from '../bridgeBuildersLetterHeadLogo.png'
import '../App.css';

import Admin from './Admin'
import {
    BrowserRouter as Router,
    Switch,
    Route, 
    Link,
    useParams
  } from "react-router-dom";
function Home() {

    return (

    <div>
        <div className="flexContainer">
          <div className="flexside">
          <a href="https://www.bridgebuildersla.org/"><img src={bridgeBuildersLogo} alt="Bridge Builders" className="headerImg"/></a>
          </div>
          <div className="flexmiddle"></div>
          <div className="flexsideHeader">
            <Link to="/admin"><div className="adminLink"><h2>Admin</h2></div></Link>
          </div>
        </div>
        <div className="infographicBlock">

        </div>
    </div>

    )
  }

export default Home