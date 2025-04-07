import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyParcels = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  }

  return (
<div>
  <div className="d-flex justify-content-end align-items-center mt-3 position-relative" style={{ cursor: "pointer" }}>
    <div className="text-light" onClick={handleOpen} style={{ fontSize: "18px", fontWeight: "600" }}>
      <FaUser className="me-2" /> Mohamed Osama
    </div>

    {open && (
      <div
        className="position-absolute shadow-lg rounded-3 p-3"
        style={{
          top: "25px",
          right: "0",
          width: "250px",
          backgroundColor: "#f8f9fa",
          zIndex: "999",
          boxShadow: "0px 10px 15px rgba(0,0,0,0.1)",
        }}
      >
        <ul className="list-unstyled m-0">
          <Link to="/allparcels">
          <li className="my-2 element text-center p-2 rounded" style={{ cursor: "pointer", transition: "background-color 0.3s ease, color 0.3s ease" }}>
            All Parcels
          </li>
          </Link>
          <li className="my-2 element text-center p-2 rounded" style={{ cursor: "pointer", transition: "background-color 0.3s ease, color 0.3s ease" }}>
            Statement
          </li>
          <li className="my-2 element text-center p-2 rounded" style={{ cursor: "pointer", transition: "background-color 0.3s ease, color 0.3s ease" }}>
            Logout
          </li>
        </ul>
      </div>
    )}
  </div>

  <div className="container mt-4">
    <h2 className="text-white" style={{ fontSize: "25px", fontWeight: "600" }}>My Parcels</h2>

    {/* Parcel Item */}
    
      <div  className="d-flex flex-column flex-md-row justify-content-between bg-light mb-3 p-3 rounded-3 shadow-sm">
        <div className="flex-grow-1">
          <ul>
            <li>From: ontaria, usa</li>
            <li>Weight: 20KG</li>
            <li>Date: 17/3/2025</li>
            <li>Sender: mohammed osama</li>
          </ul>
        </div>
        <div className="d-flex flex-column align-items-center">
          <span>To: san diego, usa</span>
          <button className="btn btn-dark mt-2">pending</button>
        </div>
      </div>
    
      <div  className="d-flex flex-column flex-md-row justify-content-between bg-light mb-3 p-3 rounded-3 shadow-sm">
        <div className="flex-grow-1">
          <ul>
            <li>From: ontaria, usa</li>
            <li>Weight: 20KG</li>
            <li>Date: 17/3/2025</li>
            <li>Sender: mohammed osama</li>
          </ul>
        </div>
        <div className="d-flex flex-column align-items-center">
          <span>To: san diego, usa</span>
          <button className="btn btn-dark mt-2">pending</button>
        </div>
      </div>
    
      <div  className="d-flex flex-column flex-md-row justify-content-between bg-light mb-3 p-3 rounded-3 shadow-sm">
        <div className="flex-grow-1">
          <ul>
            <li>From: ontaria, usa</li>
            <li>Weight: 20KG</li>
            <li>Date: 17/3/2025</li>
            <li>Sender: mohammed osama</li>
          </ul>
        </div>
        <div className="d-flex flex-column align-items-center">
          <span>To: san diego, usa</span>
          <button className="btn btn-success mt-2">Delliverd</button>
        </div>
      </div>

  </div>
</div>

  )
};


export default MyParcels;