import { useEffect, useState } from "react";

function RequestHistory(){

  const [history,setHistory] = useState([]);

  useEffect(()=>{

    const stored = JSON.parse(localStorage.getItem("requests")) || [];
    setHistory(stored);

  },[]);

  return(

    <div>

      <h2>Request History</h2>

      {history.length === 0 && (

        <p>No request history available</p>

      )}

      <div className="card-container">

        {history.map((req,i)=>(

          <div key={i} className="card">

            <p>Blood: {req.blood}</p>
            <p>City: {req.city}</p>
            <p>Matches: {req.matches}</p>
            <p>Date: {req.date}</p>

          </div>

        ))}

      </div>

    </div>

  );

}

export default RequestHistory;