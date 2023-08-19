import React from 'react'
import './consolecontent.css';

export default function Consolecontent() {
  return (
    <div className="chaljabhai" id="test-cases">
    <h3> TEST-CASES</h3>

    <div className="consoleBlocks"> 

       <div className="block1">
        <h5>input</h5>
        <textarea>
       
        </textarea>

      </div>


       <div className="block2">
        <h5>This is Output </h5>  

      </div> 

    </div>
    <div className="Status">
      <div className="overallStatus">
        Answer is Correct /Failed.
      </div>
       <div className="alltext d-flex flex-wrap ">
        <div className="test d-flex mx-3"> Test Case 1 <ion-icon name="close-circle-outline" className="mx-3 my-1"
            size="large"></ion-icon> </div>
        <div className="test d-flex mx-3"> Test Case 2 <ion-icon name="checkmark-circle-outline" className="mx-3 my-1"
            size="large"></ion-icon></div>
        <div className="test d-flex mx-3"> Test Case 3 <ion-icon name="checkmark-circle-outline" className="mx-3 my-1"
            size="large"></ion-icon></div>
        <div className="test d-flex mx-3"> Test Case 4 <ion-icon name="checkmark-circle-outline" className="mx-3 my-1"
            size="large"></ion-icon></div>
      </div> 
    </div>
  </div>
  )
}
