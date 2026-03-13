import { useState } from "react";

function Register() {

  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    blood: "",
    city: "",
    phone: "",
    hemoglobin: "",
    health: ""
  });

  const [message, setMessage] = useState("");

  function handleChange(e) {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  }

  function registerDonor() {

    const donors = JSON.parse(localStorage.getItem("donors")) || [];

    donors.push(formData);

    localStorage.setItem("donors", JSON.stringify(donors));

    setMessage("Donor Registered Successfully ✅");

  }

  return (

    <div>

      <h2>Register Donor</h2>

      <input
        name="name"
        placeholder="Name"
        onChange={handleChange}
      />

      <br/>

      <input
        name="gender"
        placeholder="Gender"
        onChange={handleChange}
      />

      <br/>

      <input
        name="blood"
        placeholder="Blood Group"
        onChange={handleChange}
      />

      <br/>

      <input
        name="city"
        placeholder="City"
        onChange={handleChange}
      />

      <br/>

      <input
        name="phone"
        placeholder="Phone"
        onChange={handleChange}
      />

      <br/>

      <input
        name="hemoglobin"
        placeholder="Hemoglobin"
        onChange={handleChange}
      />

      <br/>

      <input
        name="health"
        placeholder="Health Status"
        onChange={handleChange}
      />

      <br/><br/>

      <button className="primary-btn" onClick={registerDonor}>
        Register Donor
      </button>

      {message && (

        <p style={{color:"green"}}>
          {message}
        </p>

      )}

    </div>

  );

}

export default Register;