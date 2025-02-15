import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const Forms = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [IdNo, setIdNo] = useState('');
    const [PhoneNo, setPhoneNo] = useState('');
    const [county, setCounty] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch('https://jhietechnologies-3.onrender.com/api/users', {
            method: 'POST',
            headers: { 
              'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, IdNo, PhoneNo , county })
        });
        alert('Profile created successfully');
    };
    return (
   
<form className="row g-3" onSubmit={handleSubmit}style={{ marginTop:"350px",position:"relative"}}>
  <div className="col-md-3">
    <label className="form-label">Full name</label>
    <input type="text" className="htmlForm-control" placeholder="Your Name" id="name" value={name} onChange={(e) => setName(e.target.value)} required/>
  </div>
  <div className="col-md-3">
    <label htmlFor="inputPassword4" className="form-label">Email</label>
    <input type="email" className="form-control" placeholder="Your Email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
  </div>
  <div className="col-md-2">
    <label className="form-label">ID</label>
    <input type="text" className="form-control" placeholder="Your ID" id="IdNo" value={IdNo} onChange={(e) => setIdNo(e.target.value)} required/>
  </div>
  <div className="col-md-2">
    <label className="form-label">Phone Number</label>
    <input type="text" className="form-control" placeholder="Phone Number" id="PhoneNo" value={PhoneNo} onChange={(e) => setPhoneNo(e.target.value)} required/>
  </div>
  <div className="col-md-2">
    <label  className="form-label">State/County</label>
    <input type="text" className="form-control" id="county"  value={county} onChange={(e) => setCounty(e.target.value)} required/>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Submit</button>
  </div>
</form>
    );

  };

  export default Forms;
