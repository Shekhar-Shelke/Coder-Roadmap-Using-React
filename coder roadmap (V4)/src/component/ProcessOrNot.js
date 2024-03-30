import React from 'react'
import ProcessingPayment from "./ProcessingPayment";
import ProcessCompleted from "./ProcessCompleted";

export default function process(props) {
  return (
    <>{
        props.process==true? <ProcessingPayment/>:<ProcessCompleted/>
        }
    </>
  )
}
