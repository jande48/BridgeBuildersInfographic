import React  from "react";
import '../App.css';
import bridgeBuildersLogo from '../bridgeBuildersLetterHeadLogo.png'
import {
    BrowserRouter as Link
  } from "react-router-dom";

function HeaderAdmin() {

    return (
    <div>
      <div className="flexContainer">
        <div className="flexside">
          <a href="https://www.bridgebuildersla.org/"><img src={bridgeBuildersLogo} alt="Bridge Builders" className="headerImg"/></a>
        </div>
        <div className="flexmiddle"></div>
        <div className="flexsideHeader">
          <Link to="/home"><div className="adminLink"><h2>Home</h2></div></Link>
        </div>
      </div>
    </div>
    )

}

export default HeaderAdmin