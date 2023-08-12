// import Instruct from "./components/instruct-comp/instruct";
import Navbar from "./components/Nav-comp/Navbar";
import './App.css';
import Codingpage from "./components/codingpage-comp/codingpage";
// import Leaderboard from "./components/leaderb-comp/leaderboard";
// import Result from "./components/result-comp/result";
import Footer from "./components/footer-comp/footer";
// import Quescards from "./components/quescard-comp/quescards";
// import Login from "./components/loginpage-comp/login";
// import axios from "./components/axios";

function App() {

  return (
    <>
      <div className="App-container">
        <Navbar />
        {/* <Quescards /> */}
        {/* <Leaderboard/> */}
        {/* <Result /> */}
        {/* <Instruct/> */}
        <Codingpage />
        {/* <Login></Login> */}
        <Footer />
      </div>
      
    </>
  );
}

export default App;
