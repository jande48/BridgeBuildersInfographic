import React, {useEffect, useState}  from "react";
import '../App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
function AddData() {
    const axios = require('axios').default;
    const [pickle, setPickle] = useState({})
    const [redirectHome, setRedirectHome] = useState(false)

    useEffect(() => {
        axios.get('/getPostPickle')
          .then(function (response) {
            setPickle(response.data)
          })
    },[])

    const handlePickleSubmit = (e) => {
        e.preventDefault();

        axios.post('/getPostPickle', pickle)
          .then(function (response) {
            setRedirectHome(true)
          })
    }
    const setNumberOfStudentsHandler = (e) => {
        const newPickle = {...pickle}
        newPickle['students']['numOfStu'] = parseInt(e.target.value)
        setPickle(newPickle)
    }
    const setGradRate6yrHandler = (e) => {
        const newPickle = {...pickle}
        newPickle['students']['gradRate6yr'] = parseInt(e.target.value)
        setPickle(newPickle)
    }
    const setGradRate4yrHandler = (e) => {
        const newPickle = {...pickle}
        newPickle['students']['gradRate4yr'] = parseInt(e.target.value)
        setPickle(newPickle)
    }
    const setFirstGenCollegeHandler = (e) => {
        const newPickle = {...pickle}
        newPickle['students']['firstGenCollege'] = parseInt(e.target.value)
        setPickle(newPickle)
    }
    const setHoursMentoringHandler = (e) => {
      const newPickle = {...pickle}
      newPickle['students']['hoursMentoring'] = parseInt(e.target.value)
      setPickle(newPickle)
  }
    console.log(redirectHome)
    return (
      
    
    <div>
      {redirectHome ? 
        <div>
          <Redirect to="/home" />
        </div>
      :
        <div className="infographicBlock">
          <div className="flexContainer">
            <div className="flexside"></div>
            <div className="flexpassword">
              <form onSubmit={handlePickleSubmit}>
                <div class="form-group row">
                  <label for="numberOfStudents">Number of Students:</label>
                  <div class="col-sm-10">
                  <input class="form-control" id="numberOfStudents" type="text" onChange={setNumberOfStudentsHandler} name="numberOfStudents"/>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="gradRate6yr">Six Year Grad Rate:</label>
                  <div class="col-sm-10">
                  <input class="form-control" id="gradRate6yr" type="text" onChange={setGradRate6yrHandler} name="gradRate6yr"/>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="gradRate4yr">Four Year Grad Rate:</label>
                  <div class="col-sm-10">
                  <input class="form-control" id="gradRate4yr" type="text" onChange={setGradRate4yrHandler} name="gradRate4yr"/>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="firstGenCollege">First Gen College %:</label>
                  <div class="col-sm-10">
                  <input class="form-control" id="firstGenCollege" type="text" onChange={setFirstGenCollegeHandler} name="firstGenCollege"/>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="hoursMentoring">Hours Mentoring:</label>
                  <div class="col-sm-10">
                  <input class="form-control" id="hoursMentoring" type="text" onChange={setHoursMentoringHandler} name="hoursMentoring"/>
                  </div>
                </div>
                <div class="form-group row">
                    <input type="submit" class="btn btn-dark" value="Submit"/>
                </div>
              </form>
            </div>
            <div className="flexside"></div>
          </div>
        </div>
      }
    </div>
  
    )

}

export default AddData