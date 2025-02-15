import { useState, useEffect } from "react";

function UserProfile({ userId }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3001/api/users/${userId}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("User not found or server error");
                }
                return response.json();
            })
            .then((data) => {
                console.log("Fetched User Data:", data);
                setUser(data);
            })
            .catch((err) => {
                console.error("Error:", err);
                setError(err.message);
            })
            .finally(() => setLoading(false));
    }, [userId]);

    if (loading) return <p>Loading user profile...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!user) return <p>User not found.</p>;

    return (
 
        <div className="bg-secondary text-primary-emphasis p-3 border border-primary-subtle rounded-3 " style={{ width: "30%",marginTop:"350px" }}>
            <h4 className="">Your Profile</h4>
           <strong>Name:</strong><p className="about"> {user.NAME}</p>
           <strong>Email:</strong> <p className="about"> {user.EMAIL}</p>
           <strong>ID:</strong> <p className="about">{user.ID_NUMBER}</p>
           <strong>Phone:</strong> <p className="about"> {user.PHONE_NUMBER}</p>
            <strong>County:</strong> <p className="about">{user.COUNTY}</p>
        </div>
    );
}

export default UserProfile;
