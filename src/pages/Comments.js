import React, { useState } from 'react';

const Comments = () => {
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const [IdNo, setIdNo] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch('https://jhietechnologies-3.onrender.com/add-comments',
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name,IdNo, country })
        });
        alert('Comment added!');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="text" placeholder="Your ID" id="IdNo" value={IdNo} onChange={(e) => setIdNo(e.target.value)} required />
            <textarea placeholder="Your Comment" id="comment" value={country} onChange={(e) => setCountry(e.target.value)} required></textarea>
            <button type="submit">Post Comment</button>
        </form>
    );
};

export default Comments;
