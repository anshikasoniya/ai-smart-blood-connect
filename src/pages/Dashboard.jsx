import { useEffect, useState } from "react";

function Dashboard() {

  const [donors, setDonors] = useState([]);

  useEffect(() => {

    const storedDonors = JSON.parse(localStorage.getItem("donors")) || [];
    setDonors(storedDonors);

  }, []);

  const bloodCount = {
    "A+": 0,
    "B+": 0,
    "O+": 0,
    "AB+": 0
  };

  donors.forEach((d)=>{

    if(bloodCount[d.blood] !== undefined){
      bloodCount[d.blood]++;
    }

  });

  return (

    <div>

      <h2>Dashboard</h2>

      <div className="dashboard-cards">

        <div className="dashboard-card">

          <h3>Total Donors</h3>

          <h1>{donors.length}</h1>

        </div>

        <div className="dashboard-card">

          <h3>A+ Donors</h3>

          <h1>{bloodCount["A+"]}</h1>

        </div>

        <div className="dashboard-card">

          <h3>B+ Donors</h3>

          <h1>{bloodCount["B+"]}</h1>

        </div>

        <div className="dashboard-card">

          <h3>O+ Donors</h3>

          <h1>{bloodCount["O+"]}</h1>

        </div>

        <div className="dashboard-card">

          <h3>AB+ Donors</h3>

          <h1>{bloodCount["AB+"]}</h1>

        </div>

      </div>

    </div>

  );

}

export default Dashboard;