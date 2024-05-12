const express = require('express');
const fs = require('fs');
const cors = require('cors');

const port = 9000;
const app = express();

app.use(cors());
app.use(express.json());

let users = [];

// Load initial data from JSON file
fs.readFile('../src/databases/loginCredentials.credentials.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    users = JSON.parse(data);
});

app.get("/users", (req, res) => {
    res.json(users);
});

app.post("/adduser", (req, res) => {
    const newUser = req.body;
    
    // Check if the email already exists
    const existingUser = users.find(user => user.email === newUser.email);
    if (existingUser) {
        return res.status(400).json({ message: "Email already exists" });
    }

    // If email doesn't exist, add the user
    users.push(newUser);
    saveUsersToFile();
    console.log(req.body);
    res.json({ message: "User added successfully" });
});

app.delete("/deleteuser", (req, res) => {
    const emailToDelete = req.body.email;
    const index = users.findIndex((user) => user.email === emailToDelete);
    if (index < 0) {
        res.json({ message: "User not found" });
    } else {
        users.splice(index, 1);
        saveUsersToFile();
        res.json({ message: "Deleted" });
    }
});

app.put("/updateuser", (req, res) => {
    const { username, password, email, phone, role } = req.body;
    const index = users.findIndex((user) => user.email === email);
    if (index < 0) {
        res.json({ message: "User not found" });
    } else {
        users[index] = { username, password, email, phone, role };
        saveUsersToFile();
        res.json({ message: "Updated" });
    }
});

function saveUsersToFile() {
    fs.writeFile('../src/databases/loginCredentials.credentials.json', JSON.stringify(users, null, 2), (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log('Users saved to file');
    });
}

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
