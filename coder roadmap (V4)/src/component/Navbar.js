import React, { useEffect, useState } from 'react'
import "../CSS/Nav.css"
import { Link ,useNavigate } from 'react-router-dom'
import cart from "../images/shopping_cart.svg"
import Aftercart from "../images/After cart.svg"
import axios from 'axios';
import AftNav from '../component/AfterNav'

export default function Navbar(props) {
    // const [auth,setAuth] = useState(false);
    // const [message,setMessage]=useState('');
    // const [name,setName]=useState('')
    // axios.defaults.withCredentials=true;
    // useEffect(()=>{
       
        
    //     axios.get("http://localhost:8081")
    //     .then((response) => {
    //       if(response.data.Status==="Success"){
    //          setAuth(true)
    //          props.getdata("true");
    //         setName(response.data.name)
    //       }else{
    //         setAuth(false)
    //             setMessage(response.data.Error)
    //       }
    //     })
      
    // },[])
    // setAuth(props.valid)
    const Navigate=useNavigate();
    const handleLogout=()=>{
        axios.get('http://localhost:8081/logout')
        .then(res=>{
            location.reload(true);
            Navigate('/')
            location.pathname
        }).catch(err=>console.log(err));
        window.localStorage.removeItem("isLogedIn")
        Navigate("/")
    }
  return (
    
   location.pathname==='/MyCources' || location.pathname==='/CourseLessons' || location.pathname==='/DashBoard' ?
   <div><AftNav/></div>:
   <div className="header">
        <div className="navbar">
            <div className="logo">
            <Link to="/"><span><span className="c">C</span><span className="oder">oder</span> <span className="road">Road</span><span
                        className="map">Map</span></span></Link>
            </div>
            <div className="menus">
                <ul>
                    <li className="menu-list" id="manu-list-1"><Link to="/ ">Home</Link> </li>
                    <li className="menu-list" id="manu-list-2"><Link to="/About">About us</Link></li>
                    <li className="menu-list" id="manu-list-3"><Link to="/OurTeam">Our team</Link></li>
                    <li className="menu-list" id="manu-list-4"><Link to="/Contact">Contact us</Link></li>
                </ul>
            </div>{
            props.valid==="true" ?
                props.additem===true?<div className="cart" ><Link to="/ShopCart"><img src={Aftercart} alt="" /></Link></div> 
                :<Link to="/NoItemShopCart"><div className="cart"  ><img src={cart} alt="" /></div></Link>           
            : <div className="cart" style={{display:"none"}} ><img src={cart} alt="" /></div>
            
            
}
            {
            props.valid==="true"? <div className="auth">
                <div className="hover-btn dropdown">
                    <div className="getstarted dropbtn">
                        <Link to="#"> <span className="btn  get-btn auth-btn"> {props.name}  </span></Link>
                    </div>
                    <div className="dropdown-postion">
                      
                        <div className="dropdown-content">
                        <Link to="/DashBoard" style={{ textDecoration: 'none'}} ><div className="list-item list-font" style={{ textDecoration: 'none'}}>My DashBorad </div></Link>
                        <Link to="/MyCources" style={{ textDecoration: 'none'}} ><div className="list-item list-font" >My Cources</div></Link>
                        <Link to="#"  onClick={handleLogout} style={{ textDecoration: 'none'}}> <div className="list-item list-font" >Logout</div></Link>
                        
                        </div>
                        </div>
                        {/* <div  className="getstarted">
                        <Link to="#" onClick={handleLogout}> <span className="btn get-btn">LogOut</span></Link>
                        </div> */}
                    </div>
                </div>
            :
            <div  className="getstarted">
            <Link to="/login"> <span className="btn get-btn">Get Started</span></Link>
        </div>                       
            
                 }
                 
        </div>
    </div>
    
    
  )
}
