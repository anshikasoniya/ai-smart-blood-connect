import { useState } from "react";

import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import DonorList from "./pages/DonorList";
import Request from "./pages/Request";
import RequestHistory from "./pages/RequestHistory";

import "./App.css";

function App() {

  const [page, setPage] = useState("dashboard");

  return (

    <div>

      {/* Title */}

      <h1>AI Smart Blood Connect</h1>

      {/* Navbar */}

      <div className="navbar">

        <button onClick={() => setPage("dashboard")}>
          Dashboard
        </button>

        <button onClick={() => setPage("register")}>
          Register
        </button>

        <button onClick={() => setPage("donors")}>
          Donors
        </button>

        <button onClick={() => setPage("request")}>
          Request
        </button>

        <button onClick={() => setPage("history")}>
          History
        </button>

      </div>

      <hr />

      {/* Page Content */}

      <div className="container">

        {page === "dashboard" && <Dashboard />}

        {page === "register" && <Register />}

        {page === "donors" && <DonorList />}

        {page === "request" && <Request />}

        {page === "history" && <RequestHistory />}

      </div>

    </div>

  );
}

export default App;