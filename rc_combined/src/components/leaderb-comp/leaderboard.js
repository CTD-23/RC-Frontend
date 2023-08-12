import React, { useEffect, useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'datatables.net-dt/css/jquery.dataTables.min.css';
import DataTable from "react-data-table-component";
import "./leaderboard.css";

const Leaderboard = () => {
  const [dataSet, setDataSet] = useState([]);

  useEffect(() => {
    // Fetch your leaderboard data from an API or other source
    // For demonstration, using static data here
    const fetchedData = [
      {
        rank: "1",
        username: "Shreya",
        q1: "100",
        q2: "-",
        q3: "100",
        q4: "100",
        q5: "100",
        score: "400",
      },
    ];

    setDataSet(fetchedData);
  }, []);

  const columns = [
    { name: "Rank", selector: "rank", sortable: true },
    { name: "Username", selector: "username", sortable: true },
    { name: "Q1", selector: "q1", sortable: true },
    { name: "Q2", selector: "q2", sortable: true },
    { name: "Q3", selector: "q3", sortable: true },
    { name: "Q4", selector: "q4", sortable: true },
    { name: "Q5", selector: "q5", sortable: true },
    { name: "Score", selector: "score", sortable: true },
  ];

  return (
    <div className="container">
      <div className="row">
        <h1 className="mt-4 mb-3">Leaderboard</h1>
        <div className="">
          <DataTable
            columns={columns}
            data={dataSet}
            pagination
            className="col custom-table"
          />
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
