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
        await fetch('http://localhost:3001/api/users', {
            method: 'POST',
            headers: { 
              'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, IdNo, PhoneNo , county })
        });
        alert('Profile created successfully');
    };
    return (
   
<form class="row g-3" onSubmit={handleSubmit}style={{ marginTop:"350px",position:"relative"}}>
  <div class="col-md-3">
    <label class="form-label">Full name</label>
    <input type="text" class="form-control" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required/>
  </div>
  <div class="col-md-3">
    <label for="inputPassword4" class="form-label">Email</label>
    <input type="email" class="form-control" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
  </div>
  <div class="col-md-2">
    <label class="form-label">ID</label>
    <input type="text" class="form-control" placeholder="Your ID" value={IdNo} onChange={(e) => setIdNo(e.target.value)} required/>
  </div>
  <div class="col-md-2">
    <label class="form-label">Phone Number</label>
    <input type="text" class="form-control" placeholder="Phone Number" value={PhoneNo} onChange={(e) => setPhoneNo(e.target.value)} required/>
  </div>
  <div class="col-md-2">
    <label  class="form-label">State/County</label>
    <input type="text" class="form-control"  value={county} onChange={(e) => setCounty(e.target.value)} required/>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</form>
    );

  };

  export default Forms;