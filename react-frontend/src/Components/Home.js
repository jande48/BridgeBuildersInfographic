import React, {useRef, useEffect, useState} from "react";
import '../App.css';
import * as d3 from 'd3';
import bridgeBuildersLogo from '../bridgeBuildersLetterHeadLogo.png'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import bubbleChart from "./bubbleChart";
import thermometerChart from "./thermometerChart";

function Home() {
  
  const bubbleChartNode = useRef()
  const thermometerChartNode = useRef()
  const [pickle, setPickle] = useState({})


  useEffect(() => {
      const axios = require('axios').default;
      axios.get('/getPostPickle')
        .then(function (response) {
          
          if (typeof(response.data) == 'object'){
            setPickle(response.data)
          }else{
            setPickle(JSON.parse(response.data))
          }
          
          bubbleChart(bubbleChartNode,response.data)
        })
      
      //thermometerChart(thermometerChartNode)
  },[])
    
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
        <div className="fullWidth">
          <React.Fragment>
            <svg id="bubbleChart" className="fullWidth" ref={bubbleChartNode}/>
          </React.Fragment>
          
        </div>

    </div>

    )
  }

export default Home