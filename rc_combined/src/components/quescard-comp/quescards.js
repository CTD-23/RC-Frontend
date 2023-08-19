import React,{useEffect,useState} from 'react';
import './quescards.css'; // Import your custom CSS
import { Link } from 'react-router-dom'
import { AxiosInstance ,addAuthToken} from '../../Utils/AxiosConfig';
import { getToken} from '../../Utils/utils';

const endPoint = "/api/questions/"

const tasks = [
  
];

function App() {
const [Qdata, setQdata] = useState(tasks);
  useEffect(()=>{
    addAuthToken(getToken());
    AxiosInstance.get(endPoint)
            .then((response) => {
                console.log("enter in then ");
                if (response.status) {
                    console.log("enter in then if ");
                    console.log(response.data);
                    setQdata(response.data)

                }
                else {
                    
                    console.log("Error In fetch");
                }
            })
            .catch((error) => {
                
                console.log("enter in error ",error);

            })
  },[]);



  const rows = Qdata.map(task => (
    <div className="card" key={task.questionId}>
      <p className="thwala"> {task.title}</p>
      <div className="thwala" id="progress">
        <div className="progress" style={{ height: '25px' }}>
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${task.accuracy}%` }}
            aria-valuenow={task.accuracy}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {task.accuracy}%
          </div>
        </div>
      </div>
      <div className="thwala">
        <button
          type="button"
          className="btn btn-primary btn-sm"
          data-bs-toggle="modal"
          data-bs-target="#myModal"
        >
          {/* <a href={task.questionId}>SOLVE</a> */}
          <Link to={`/question/${task.questionId}`}>SOLVE</Link>
        </button>
      </div>
    </div>
  ));


  

  return (
    <>
      {/* ...Navbar and other components */}
      <div className="backgr">
      <div className="Heading">
        <h2>Question Hub</h2>
      </div>
      
        <table className="question-table table table-responsive-sm">
          <tbody>
            <div className="badadiv">{rows}</div>
          </tbody>
        </table>
      </div>

      {/* ...Footer and other components */}
    </>
  );
}

export default App;
