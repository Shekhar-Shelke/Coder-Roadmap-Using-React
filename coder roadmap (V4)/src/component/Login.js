import React, { useState } from 'react';
import "../CSS/login.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import res from 'express-serve-static-core'

export default function login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState("");

    const navigate=useNavigate()
    axios.defaults.withCredentials=true;  
    const login = (e) => {
        e.preventDefault();
        window.localStorage.setItem("isLogedIn",true)
        axios.post("http://localhost:8081/login", {
          username: username,
          password: password,
        }).then((response) => {
          if(response.data.message){
            setLoginStatus(response.data.message ,navigate('/'));
          }else{
            setLoginStatus(console.log("hello"),navigate('/') );
          }
        })
      }
  return (
    <>
    <div className="login-sec">
        <div className="logo1">
            <a href="/"><span><span className="c1">C</span><span className="oder1">oder</span> <span className="road1">Road</span><span className="map1">Map</span></span></a>
        </div>
        <div className="login-box">
            <form >
                <div className="input-login">

                    <div><input type="text" id="username" className="input-1 " name="username" onChange={(e)=>{setUsername(e.target.value)}} placeholder="Username"/></div>
                    <div><input type="text" id="password" name="password" className="input-1"  onChange={(e)=>{setPassword(e.target.value)}}placeholder="Password"/></div>
                    
                </div>
                <div className="forget-login">
                    <div className="forget">Forgot password?</div>
                    <div className="login"><input type="submit" onClick={login} name="submit"   value="Login"/> </div> 
                </div>

                <div className="lineback">
                    <div className="line-login"></div>
                </div>
                <div className="dont-signup">
                    <div className="signup-text"> Don’t have an account? <Link to="/Signup"><span> Sign up</span></Link></div>
                </div>
                <h1 style={{color: 'red', fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{loginStatus}</h1>
            </form>
        </div>
    </div>
    <div className="background-color"></div>
    </>
  )
}
