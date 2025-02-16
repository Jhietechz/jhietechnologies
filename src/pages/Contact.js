import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
// import Comments from "./pages/Comments";

const Contact = () => {
        const [name, setName] = useState('');
        // const [country, setCountry] = useState('');
        const [message, setMessage] = useState('');
    
        const handleSubmit = async (e) => {
            e.preventDefault();
            await fetch('https://jhietechnologies-3.onrender.com/api/messages',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name,message })
            });
            alert('Message sent successfully');
        };
    
        return (
<div style={{ marginTop:"350px",position:"relative"}}>
            <form onSubmit={handleSubmit} >
                {/* /* <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required /> */}
                <input type="text" placeholder="Name" id="name" value={name} onChange={(e) => setName(e.target.value)} required /> 
                <textarea placeholder="Your message" id="message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                <button type="submit">Send</button>
            </form>
            </div>
      );
  };
  
  export default Contact;
