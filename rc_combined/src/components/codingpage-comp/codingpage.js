import React from 'react'
import './codingpage.css'
export default function codingpage() {
  return (
    <>
    <body className='mainBody'>

  
    <section className="coding ">
    {/* <!-- the Question section starts here  --> */}
    <div className="questionpart">
      <div className="question-sec">
        <div className="que-name">
          <h3> Problem </h3>
          
        </div>
        <div className="quepart que-description" Style="height: auto;">
          <h4>Question Description</h4>
          <p>Chef and some of his friends are planning to participate in a puzzle hunt event.

            The rules of the puzzle hunt state:
            "This hunt is intended for teams of 
            6
            6 to 
            8
            8 people."
            
            Chef's team has 
            �
            N people in total. Are they eligible to participate?</p>{"\n"}
            <p>
             <h4>Input Format</h4> {"\n"}
The first and only line of input will contain a single integer 
�
N: the number of people present in Chef's team.
</p>
{"\n"}
<p>

       <h4>Output Format</h4>{"\n"}
       Print the answer: Yes if Chef's team is eligible to participate, and No otherwise.
 
      Each letter in the output may be printed in either uppercase or lowercase,
      i.e, the outputs NO, No, nO, no will all be treated as equivalent.
        
            </p>
          <div className="queimg text-center">
            {/* <img src="http://images5.fanpop.com/image/photos/30600000/random-random-30660647-1280-1024.png" alt="loding"> */}
        </div>
        <div className="quepart que-constrains">
          <h3>Question Constraints</h3>
          <p>1≤N≤10
          </p>
        </div>
      </div>
      <div className="iop">
        <div className="rc-input-output">
          <div className="inputrc">
            <h6>INPUT</h6>
            <textarea></textarea>
          </div>
          <div className="outputrc">
            <h6>OUTPUT</h6>
            <textarea className="inputs-output"></textarea>
          </div>
        </div>
        {"\n"}
        {"\n"}
  
        <div className="get-output">
          <button>GET OUTPUT</button>
        </div> 
      </div>
      
    </div>

    </div>
    
    {/* <!-- The code Editor Section Starts here ... --> */}
    <div className="codingpart">
      <div className="drop-buttons">
        <div className="lang">
          <select className="form-select langbtn btn-outline-dark " id="langbtn" aria-label="Default select example"
            Style="background-color: rgba(111, 3, 212, 0.696);">
            <option disabled selected value=""> Choose Language</option>
            <option value="c_cpp">C</option>
            <option value="c_cpp">C++</option>
            <option value="python">Python</option>
          </select>
        </div>
        {/* <!-- <div className="choosefile">

          <input type="file" className="form-control choosef btn-outline-dark" id="customFile" accept=".c, .cpp, .py" />
        </div> --> */}

      </div>
      <div className="code-section">
        <div className="codehere" id="editor1">
          "Code Here"
        </div>


        {/* <!-- console section --> */}
        <div className="collapse mainconsole" id="test-cases">
          <h3> TEST-CASES</h3>

          <div className="consoleBlocks">

            <div className="block1">
              <textarea>
             {/* // Custom Input  */}
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

      </div>

      {/* <!-- The Submit Button Code Starts here  --> */}
      <div className="submit-strip">
        <div className="console">
          <button type="button" className="console-btn d-flex flex-wrap " data-toggle="collapse" id="console-btn"
            data-target="#test-cases">
            Console
            <ion-icon name="chevron-up-outline" className="up mx-2 "></ion-icon>
            <ion-icon name="chevron-down-outline" className="down hidden"></ion-icon>
          </button>
        </div>
        <div className="submit-btn">
          <button type="button" className="run-btn   btn-outline-dark">Run</button>
        </div>
        <div className="sub-btn">
          <button type="button" className="run-btn  btn-outline-dark" id="submit-btn">Submit</button>
        </div>
      </div>

    </div>



    </section>
    </body>
    </>
    
  )
}
