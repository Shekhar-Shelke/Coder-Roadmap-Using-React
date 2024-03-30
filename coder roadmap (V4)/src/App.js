import "./App.css";
// import res from 'express';
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Footer from "./component/Footer";
import OurTeam from "./component/OurTeam";
import Contact from "./component/ContactUs";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Cource from "./component/Cources";
import CourceDetails from "./component/CourceDetails";
import Alert from "./component/Alert";
import ShopCart from "./component/ShopCart";
import CheckOut from "./component/CheckOut";
import ProcessingPayment from "./component/ProcessingPayment";
import ProcessCompleted from "./component/ProcessCompleted";
import NoItemShopCart from "./component/NoItemShopCart";
import Process from "./component/ProcessOrNot";
import AftNav from "./component/AfterNav"
import MyCources from "./component/MyCources"
import CourseLessons from "./component/CourseLessons"
import DashBoard from "./component/DashBoard"

// import axios from "axios";
import { useState,useEffect } from "react";
import {
  // createBrowserRouter as Router,
  // Routes,
  Routes,
  Route,
  BrowserRouter,
  // Link,
} from "react-router-dom";

function App() {
  const login=window.localStorage.getItem("isLogedIn"); 
const [valid,setValid] = useState("false");
const [name,setName]=useState()
const [alert,setAlert]=useState(null)
const [additem,setAdditem]=useState(false)
const [process,setProcess]=useState(false)
const showProcess=()=>{
  setProcess(true)
  setTimeout(() => {
    setProcess(false)
  }, 5000);
}
const showAlert=()=>{
  setAlert({
    cartTrue:"true",
    notnull:"ok",    
    })
  setAdditem(true)
  console.log("okAlert")
  setTimeout(() => {
    setAlert(null)
  }, 1000);
}
const removeItem=()=>{
  setAdditem(false)
}
const getdata=(a,name)=>{
  if(valid==a){
    setValid("true")
    setName(name)
    
  }else{
    setValid("false")
  }
  }
 
   return (
    <> 
     <div className="app">
      <BrowserRouter>
       <Navbar added={alert} additem={additem} valid={valid} name={name} />
      <Alert  added={alert}/>
      {/* <CourceDetails/> */}

        <Routes>
          <Route path="/" element={<Home getdata={getdata}/>}></Route>
          {/* <Route path="/" element={<Navbar getdata={getdata}/>}></Route> */}
          <Route path="/About" element={<About/>}></Route>
          <Route path="/OurTeam" element={<OurTeam/>}></Route>
          <Route path="/Contact" element={<Contact/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/Signup" element={<Signup/>}></Route>
          <Route path="/Cources" element={<Cource/>}></Route>
          <Route path="/ShopCart" element={valid==="true"?<ShopCart removeItem={removeItem}/>:<Home/>}></Route>
          <Route path="/CheckOut" element={valid==="true"?<CheckOut showProcess={showProcess}/>:<Home/>}></Route>
          <Route path="/ProcessingPayment" element={valid==="true"?<ProcessingPayment/>:<Home/>}></Route>
          <Route path="/ProcessCompleted" element={valid==="true"?<ProcessCompleted/>:<Home/>}></Route>
          <Route path="/ShopCart/NoItemShopCart" element={<NoItemShopCart/>}></Route>
          <Route path="/NoItemShopCart" element={<NoItemShopCart/>}></Route>
          <Route path="/Process" element={valid==="true"?<Process process={process}/>:<Home/>}></Route>

          <Route path="/CourceDetails" element={<CourceDetails showAlert={showAlert} valid={valid}/>}></Route>
          <Route path="/AftNav" element={valid==="true"?<AftNav/>:<Home/>}></Route>
          <Route path="/MyCources" element={<MyCources/>}></Route>
          <Route path="/CourseLessons" element={<CourseLessons/>}></Route>
          <Route path="/DashBoard" element={<DashBoard/>}></Route>
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
