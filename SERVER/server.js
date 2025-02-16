const mysql = require("mysql");
app.use(express.json());
const express = require("express");
const app = express();
const db_url = new
URL(process.env.MYSQL_URL);
const PORT = process.env.PORT || 10100;
const cors = require("cors");

app.options("*", cors(corsOptions));
app.use(cors({origin: "https://jhietechnologies.netlify.app",
              methods:"GET, POST, PUT, DELETE",
              credentials: true}));
app.listen(PORT, '0.0.0.0' () => console.log(`Server running on port ${PORT}`));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://jhietechnologies.netlify.app");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Credentials", "true");
    if (req.method === "OPTIONS") {
        return res.sendStatus(200);
    }
    next();
});

app.use(cors());
app.use(express.json()); // Ensure JSON parsing is enabled

// Database connection
const db = mysql.createConnection({
    host: "process.env.MYSQLHOST",
    user: "process.env.MYSQLUSER",
    password: "process.env.MYSQLPASSWORD",
    database: "process.env.MYSQLDATABASE",
    port: "process.env.MYSQLPORT",
    ssl: {
        rejectUnauthorized: true }
});

db.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err);
        return;
    }
    console.log("Connected to MySQL");
});
//view users
app.get("/api/users", (_, res) => {
    db.query("SELECT * FROM users", (err, result) => {
        if (err) {
            res.status(500).json({ error: "Database query failed" });
        } else {
            res.json(result);
        }
    });
});

//view messages
app.get("/api/messages", (_, res) => {
    db.query("SELECT * FROM messages", (err, result) => {
        if (err) {
            res.status(500).json({ error: "Database query failed" });
        } else {
            res.json(result);
        }
    });
});

// Fetch user data
app.get("/api/users/:id", (req, res) => {
    const userId = req .params .id;
    const sql = "SELECT * FROM users WHERE id = ?";
    db.query(sql, [userId], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        if (result.length === 0) {
            return res.status(404).send("User not found");
        }
        res.status(200).json(result[0]);
    });
});

// API route to add a user
app.post("/api/users", (req, res) => {
    const { name, IdNo, PhoneNo, email, county } = req.body;

    if (!name || !IdNo || !PhoneNo || !email || !county) {
        return res.status(400).send("All fields are required");
    }

    const sql = "INSERT INTO users (NAME, ID_NUMBER, PHONE_NUMBER, EMAIL, COUNTY) VALUES (?, ?, ?, ?, ?)";
    db.query(sql, [name, IdNo, PhoneNo, email, county], (err, result) => {
        if (err) {
            console.error("Database error:", err);
            return res.status(500).send("Error inserting data");
        }
        res.status(201).json({ message: "User added successfully", userId: result.insertId });
    });
});
//sending messages
app.post("/api/messages", (req, res) => {
    const { name, message } = req.body;

    if (!name || !message ) {
        return res.status(400).send("All fields are required");
    }

    const sql = "INSERT INTO messages (NAME, MESSAGE) VALUES (?, ?)";
    db.query(sql, [name, message], (err, result) => {
        if (err) {
            console.error("Database error:", err);
            return res.status(500).send("Error inserting data");
        }
        res.status(201).json({ message: "Message send successfully", userId: result.insertId });
    });
});

module.exports = db;
