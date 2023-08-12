import React from 'react';
import './quescards.css'; // Import your custom CSS
// import logo from './images/revb.png';
// import pisbLogo from './images/pisblogo.png';

const tasks = [
  { id: 1, name: 'Reverse the String', progress: 25, link: 1 },
  { id: 2, name: 'Determine the Score', progress: 50, link: 2 },
  { id: 3, name: 'Add two numbers', progress: 75, link: 3 },
  { id: 4, name: 'Sorting an Array', progress: 100, link: 4 },
  { id: 5, name: 'Find the factorial', progress: 67.7, link: 5 },
  { id: 6, name: 'Is the number Palindrome', progress: 33.3, link: 6 },
];

function App() {
  const rows = tasks.map(task => (
    <div className="card" key={task.id}>
      <p className="thwala">{task.id}. {task.name}</p>
      <div className="thwala" id="progress">
        <div className="progress" style={{ height: '25px' }}>
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${task.progress}%` }}
            aria-valuenow={task.progress}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {task.progress}%
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
          <a href={task.link}>SOLVE</a>
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
