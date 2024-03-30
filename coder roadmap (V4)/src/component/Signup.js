import React, { useState } from 'react';
import '../CSS/signup.css';
import { Link , useNavigate} from 'react-router-dom'
import Axios from 'axios';

export default function Signup() {
    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [mobno, setmobno] = useState("");
    const [email, setEmail] = useState("");
    const [Level, setLevel] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
//   const [loginStatus, setLoginStatus] = useState("");
  const [registerStatus, setRegisterStatus] = useState("");
  const navigate=useNavigate()
  const register = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:8081/signup", {
      fname: fname,
      lname: lname,
      mobno: mobno,
      email: email,
      Level: Level,
      username: username,
      password: password,
    }).then((response) => {
      setRegisterStatus(response);
      console.log(response);
      if(response.data.message){
        setRegisterStatus(response.data.message);
      }else{
        setRegisterStatus(navigate('/login'));
      }
    })
  }

  return (
    <>
    <div className="login-sec1">
        <div className="logo2">
            <Link to="/"><span><span className="c2">C</span><span className="oder2">oder</span> <span className="road2">Road</span><span className="map2">Map</span></span></Link>
        </div>
        <div className="login-box1">
             <form autoComplete='off' > 
            <div className="input1">
                     <div><input type="text" id="fname"  className="input-2" name="fname" onChange={(e) => {setfname(e.target.value)}} placeholder="First name" required/></div> 
                    <div><input type="text" id="lname" className="input-1" name="lname" onChange={(e) => {setlname(e.target.value)}} placeholder="Last name" required/></div>
                    <div><input type="text" id="mobno" className="input-1" name="mobno" onChange={(e) => {setmobno(e.target.value)}} placeholder="Mobile number" required/></div>
                    <div><input type="email" id="Email" className="input-1" name="Email" onChange={(e) => {setEmail(e.target.value)}} placeholder="Email ID" required/> </div>
                    {/* <!-- <div><input type="text" id="Llevel" className="input-1" name="Llevel" placeholder="Learner level"> --> */}
                    <div>
                        <select name="Level" id="Llevel" onChange={(e) => {setLevel(e.target.value)}} className="input-1"  required>
                            <option disabled hidden value="" >Select Learner Level</option>
                            <option value="Beginner">Beginner level</option>
                            <option value="Medium">Medium level</option>
                            <option value="Advance">Advance</option>
                        </select>
                    </div>

                        
                    <div><input type="text" id="username" className="input-1" name="username" onChange={(e) => {setUsername(e.target.value)}} placeholder="Username" required/></div>
                    <div><input type="text" id="password" name="password" className="input-1" onChange={(e) => {setPassword(e.target.value)}} placeholder="Password" required/></div>
                    <h1 style={{fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{registerStatus}</h1>
            </div>
            <div className="forget-login1">
                <div className="forget1"></div>
                <div className="login1"><input type="submit" onClick={register} value="Login" className="login1"name="submit"  /> </div>
            </div>
            </form>
            <div className="lineback1">
                <div className="line1"></div>
            </div>
            <div className="dont-signup1">
                <div className="signup-text">Already have an account?<Link to="/login"><span> Login</span></Link></div>
            </div>
        </div>
        <div className="background-color-2"></div>
        <div className="background-color"></div>
    </div>
   </>
  )
}

