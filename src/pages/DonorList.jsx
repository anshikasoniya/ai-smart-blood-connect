import { useState, useEffect } from "react";

function DonorList() {

  const [donors, setDonors] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {

    const storedDonors = JSON.parse(localStorage.getItem("donors")) || [];
    setDonors(storedDonors);

  }, []);

  function deleteDonor(index) {

    const updated = donors.filter((_, i) => i !== index);

    setDonors(updated);

    localStorage.setItem("donors", JSON.stringify(updated));

  }

  function clearAllDonors(){

    localStorage.removeItem("donors");

    setDonors([]);

  }

  const filteredDonors = donors.filter((d)=>

    d.city.toLowerCase().includes(search.toLowerCase()) ||
    d.blood.toLowerCase().includes(search.toLowerCase())

  );

  return (

    <div>

      <h2>Registered Donors</h2>

      <button className="primary-btn" onClick={clearAllDonors}>
        Clear All Donors
      </button>

      <br/>

      <input
        type="text"
        placeholder="Search by city or blood group"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />

      <div className="card-container">

        {filteredDonors.map((donor,index)=>(

          <div key={index} className="card">

            <h3>{donor.name}</h3>

            <p>
              Blood:
              <span className="blood-badge">
                {donor.blood}
              </span>
            </p>

            <p>City: {donor.city}</p>

            <p>Phone: {donor.phone}</p>

            <p>Hemoglobin: {donor.hemoglobin}</p>

            <p>Health: {donor.health}</p>

            <button
              onClick={()=>deleteDonor(index)}
              className="primary-btn"
            >
              Delete
            </button>

          </div>

        ))}

      </div>

    </div>

  );

}

export default DonorList;