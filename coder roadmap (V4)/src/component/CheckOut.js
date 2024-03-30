import React ,{ useState } from "react";
import "../CSS/Checkout.css";
import arrow_right from "../images/chevron_right.png";
import { Link ,useNavigate} from "react-router-dom";
import Axios from "axios"
import '../CSS/signup.css';


export default function CheckOut(props) {
  const [nameerror,setNamerrr]=useState("");
  const [cardnumerr,setCardnumerr]=useState("");
  const [cardexperr,setCardexperr]=useState("");
  const [cvvnumerr,setCvvnumerr]=useState("");
  const passdata=(e)=>{
  if(cardname!=""){
    if(cardnumber!=""){
      if(cardnumber.length==16){
        if(expiration!=""){
          if(expiration.length==4){
            if(cvvnum!=""){
              if(cvvnum.length==3){
              setCvvnumerr("")
              checkout(e);
              }else(
                setCvvnumerr("invalid Cvv Number")
              )
            }else{
              setCvvnumerr("Empty CVV number")
            }
            setCardexperr("");
          }else{
            setCardexperr("Invalid card expiration");
          }
        }else{
          setCardexperr("Card Expiration is Empty");
        }
        setCardnumerr("")
      }else{
        setCardnumerr("Invalid card Number");
      }
    }else{
      setCardnumerr("Card Number is Empty");
    }    
      setNamerrr("")
    
  }else{
    setNamerrr("Card Name is Empty")
  }

  }


  const [cardname, setCardname] = useState("");
  const [cardnumber, setCardnumber] = useState("");
  const [expiration, setExpiration] = useState("");
  const [cvvnum, setCvvnum] = useState("");

  const [checkoutStatus, setCheckoutStatus] = useState("");
  const navigate=useNavigate()
  
  const checkout =(e) =>{
   
    e.preventDefault();
    Axios.post("http://localhost:8081/Carddetails", {
      customer_id:1,
      cardname: cardname,
      cardnumber: cardnumber,
      expiration: expiration,
      cvvnum: cvvnum,
    }).then((res) => {      
      // console.log(response);
      if(res.data){
        setCheckoutStatus(props.showProcess(),navigate("/Process"));
               
      }else{
        setCheckoutStatus('Your Data is Wrong');
        
      }
    })}
  
  return (
    <>
      <div className="checkout">
        <div className="shopping-text">
          <p>Checkout</p>
        </div>
        <div className="card-details">
          <div className="card-info">
            <form>
              <div className="flex-input bottom-margin ">
                <div className="flex-input-1 input-margin">
                  <div className="coupon-text" >Cardholder name</div>
                  <div className="coupon-input input-size">
                    <input type="text" onChange={(e) => {setCardname(e.target.value)}} placeholder="Ex. John Smith" required />
                  </div>
                </div>
                <div className="flex-input-1">
                  <div className="coupon-text">Card number</div>
                  <div className="coupon-input input-size">
                    <input 
                      type="text"  onChange={(e) => {setCardnumber(e.target.value)}}
                      placeholder="Ex. 2362  6354  7347  3874"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="flex-input">
                <div className="flex-input-1 input-margin">
                  <div className="coupon-text">Expiration</div>
                  <div className="coupon-input input-size">
                    <input type="text"  onChange={(e) => {setExpiration(e.target.value)}} placeholder="dd/mm" required />
                  </div>
                </div>
                <div className="flex-input-1">
                  <div className="coupon-text">CVV/CVC</div>
                  <div className="coupon-input input-size">
                    <input type="text" onChange={(e) => {setCvvnum(e.target.value)}} placeholder="Ex. 233" required/>
                  </div>
                </div>
              </div>

              <Link to="#">
                <div onClick={passdata} className="btn dark-btn small-btn checkout-btn size flex-btn" >
                  <div className="">Pay 23.75</div>
                 
                  <div className="arrow-white">
                    <img src={arrow_right} alt="" />
                  </div>
                </div>
                <h1 style={{fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{checkoutStatus}</h1>
                <h1 style={{fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{nameerror}</h1>
                <h1 style={{fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{cardnumerr}</h1>
                <h1 style={{fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{cardexperr}</h1>
                <h1 style={{fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{cvvnumerr}</h1>
              </Link>
            </form>
          </div>
          <div className="checkout-cour-name">
            <div className="cource-name-checkout">Name of the course</div>
            <dic className="checkout-cour-value">$23.75</dic>
          </div>
        </div>
      </div>
    </>
  );
}
