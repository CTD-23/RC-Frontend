import "./result.css";

const result = () => {
  return ( 
    <>
       <div class="contain">
       <div class="result">
        <h1 class="resulttitle">Your Results</h1>
          <div class="user_profile">
              <div class="profile">
                <div class="profilepic">
                  A
                </div>
                <p class="name">Name</p>
              </div>

              <div class="score">
                {/* <!-- <p class="scoreitem">Rank : 5</p>
                <p class="scoreitem">Score: 10/10</p> --> */}
                <table class="tbles">
                  <thead>
                    <th>
                      Rank
                    </th>
                    <th>
                      Score
                    </th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        5
                      </td>
                      <td>
                        10/10
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="tbles">
                  <thead>
                    <th>
                      Questions 
                      Attempted
                    </th>
                    <th>
                      Questions 
                      Asked
                    </th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        7
                      </td>
                      <td>
                        7
                      </td>
                    </tr>
                  </tbody>
                </table>
                {/* <!-- <p class="scoreitem">Questions Attempted: 7</p>
                <p class="scoreitem">Questions Asked: 7</p> --> */}
              </div>
          </div>
          {/* <!-- <div class="statistics">
                     
          </div>   --> */}
       </div>
       <div class="leaderboard">

             <div class="leaderhead">
              <h1>WINNERS</h1>
             </div>       
             <div class="top3">
                  <div class="card1" id="card1">
                    <div class="circle">
                       <h2 class="place">2 </h2>
                    </div>
                    <div class="content">
                      
                      <p>2nd</p>
                      <p>Alice</p>
                      <p>Score: 99/100</p>
                    </div>
                  </div>

                  <div class="card1" id="card2">
                    <div class="circle">
                      
                        <h2 class="place">1</h2>
                    </div>
                    <div class="content">
                       <p>1st</p>
                       <p>Alice</p>
                       <p>Score: 100/100</p>
                    </div>
                  </div>

                  <div class="card1" id="card3">
                    <div class="circle">
                        <h2 class="place">3</h2>
                    </div>
                    <div class="content">
                      <p>3rd</p>
                      <p>Alice</p>
                      <p>Score: 98/100</p>
                    </div>
                  </div>
             </div>
             <div class="top6">
                <div class="tble">
                    <table class="leader-table table table-hover" id="myTable" bgcolor = "#2E363B">
                      <thead>
                        <tr class="headers" bgcolor="#13303E">
                          <th scope="col" class="userb">Rank</th>
                          <th scope="col" class="userb">Name</th>
                          <th scope="col" class="userb">Score</th>
                          <th scope="col" class="userb">Attempts</th>
                          <th scope="col" class="userb">Time</th>
                        </tr>
                      </thead>
                      <tbody id="myTable">
                        <tr class="usera">
                          <td>4th</td>
                          <td>Ted</td>
                          <td>85</td>
                          <td>9/10</td>
                          <td>0:18:00</td>  
                        </tr>        
                        <tr class="usera">
                          <td>5th</td>
                          <td>Michael</td>
                          <td>81</td>
                          <td>9/10</td>
                          <td>0:20:00</td>          
                        </tr>
                        <tr class="usera">
                          <td>6th</td>
                          <td>Joey</td>
                          <td>79</td>
                          <td>9/10</td>
                          <td>0:20:50</td>          
                        </tr>
                       </tbody>
                    </table>
                </div>
             </div>
       </div> 
    </div>
    </>
   );
}
 
export default result;