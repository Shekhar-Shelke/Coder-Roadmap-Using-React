import React from 'react';
import auto_process from "../images/autorenew.svg"
import "../CSS/ProcessingPayment.css"

export default function ProcessingPayment() {
  return (
    <>
    <div className="pro-payment">
        <div className="shopping-text">
            <p>Processing Payment...</p>
        </div>
        <div className="processing">
            <div className="flex-proc">
            <div className="circle">
            <div className="process-logo"><img src={auto_process} alt="Plase Wait" /></div></div></div>
            <div className="proc-text">Placing your order</div>
            <div className="process-alert-msg">Please do not refresh the page or click the ‘Back’ or ‘Close’ button of your browser.</div>
        </div>

    </div>

    </>
  )
}
