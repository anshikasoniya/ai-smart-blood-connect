import { useState } from "react";

function Request() {

  const [blood, setBlood] = useState("");
  const [location, setLocation] = useState("");
  const [matchedDonors, setMatchedDonors] = useState([]);

  function isCompatible(donor, patient) {

    const compatibility = {
      "A+": ["A+", "A-", "O+", "O-"],
      "A-": ["A-", "O-"],
      "B+": ["B+", "B-", "O+", "O-"],
      "B-": ["B-", "O-"],
      "AB+": ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
      "AB-": ["A-", "B-", "AB-", "O-"],
      "O+": ["O+", "O-"],
      "O-": ["O-"]
    };

    return compatibility[patient]?.includes(donor);

  }

  function findDonors() {

    const donors = JSON.parse(localStorage.getItem("donors")) || [];

    let matched = donors.filter(
      (d) => isCompatible(d.blood, blood)
    );

    matched.sort((a,b)=>{

      if(a.city === location && b.city !== location) return -1;
      if(a.city !== location && b.city === location) return 1;

      return b.hemoglobin - a.hemoglobin;

    });

    setMatchedDonors(matched);

  }

  return (

    <div>

      <h2>Emergency Blood Request</h2>

      <select value={blood} onChange={(e)=>setBlood(e.target.value)}>

        <option value="">Select Blood Group</option>
        <option>A+</option>
        <option>B+</option>
        <option>O+</option>
        <option>AB+</option>

      </select>

      <br/>

      <input
        placeholder="City"
        value={location}
        onChange={(e)=>setLocation(e.target.value)}
      />

      <br/><br/>

      <button className="primary-btn" onClick={findDonors}>
        Find Matching Donors
      </button>

      <hr/>

      <h3>Matching Donors</h3>

      {matchedDonors.length === 0 && (

        <p>No matching donors found</p>

      )}

      <div className="card-container">

        {matchedDonors.map((d,i)=>(

          <div key={i} className="card">

            <h3>{d.name}</h3>

            <p>
              Blood:
              <span className="blood-badge">
                {d.blood}
              </span>
            </p>

            <p>City: {d.city}</p>
            <p>Phone: {d.phone}</p>

          </div>

        ))}

      </div>

    </div>

  );

}

export default Request;