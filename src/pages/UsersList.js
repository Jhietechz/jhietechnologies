import { useState, useEffect } from "react";
import { Table, Spinner } from "react-bootstrap";

function UsersList() {
    const [users, setUsers] = useState([]);
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://jhietechnologies.onrender.com/api/users")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch users");
                }
                return response.json();
            })
            .then((data) => {
                setUsers(data);
            })
            .catch((err) => {
                console.error("Error:", err);
                setError(err.message);
            })
            .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        fetch("https://jhietechnologies.onrender.com/api/messages")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch messages");
                }
                return response.json();
            })
            .then((data) => {
                setMessages(data);
            })
            .catch((err) => {
                console.error("Error:", err);
                setError(err.message);
            })
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <Spinner animation="border" variant="primary" />;
    if (error) return <p>Error: {error}</p>;

    return (

        <div className="container mt-4  position-relative"style={{ top:"280px",zIndex:"1"}}>
            <h2 className="about">Clients Site</h2>
            <p><strong className="about">Total users:</strong> {users.length}</p>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>County</th>
                        <th>Time Created</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.ID_NUMBER}</td>
                            <td>{user.NAME}</td>
                            <td>{user.EMAIL}</td>
                            <td>{user.PHONE_NUMBER}</td>
                            <td>{user.COUNTY}</td>
                            <td>{new Date(user.DATE_CREATED).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <p><strong className="about">Total Messages:</strong> {messages.length}</p>
            <div className="card-body row g-4 mb-5 col-md-4 text-white">
            {messages.map((user) => (
                        <div key={user.id} className="bg-secondary card  ">
            <h6 className="text-white">{user.NAME}</h6>
            <p className="text-center">{user.MESSAGE}</p>
            <p className="text-center">{new Date(user.DATE_RECEIVED).toLocaleString()}</p>
                        </div>
                    ))}
          
          </div>
        </div> 
    );
}

export default UsersList;
