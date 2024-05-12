const express = require('express');
const fs = require('fs');
const cors = require('cors');

const port = 9001;
const app = express();

app.use(cors());
app.use(express.json());

let users = [];

// Load initial data from JSON file
fs.readFile('../src/databases/loginCredentials.SpareParts.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    users = JSON.parse(data).map((item, index) => ({ ...item, itemId: index + 1 })); // Add itemId to each item

    // Start the server after loading data
    startServer();
});

function startServer() {
    app.get("/spareparts", (req, res) => {
        res.json(users);
    });

    app.get('/spareparts/:id', (req, res) => {
        const { id } = req.params;
        const item = users.find(user => user.id === parseInt(id));
        
        if (!item) {
            return res.status(404).json({ error: 'Item not found' });
        }
        
        res.json(item);
    });

    app.post("/addpart", (req, res) => {
        const newUser = { ...req.body, itemId: users.length + 1 }; // Add itemId for the new item
        
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

    app.delete("/deletepart/:id", (req, res) => {
        const id = parseInt(req.params.id);
        const index = users.findIndex((user) => user.itemId === id);
        if (index < 0) {
            res.status(404).json({ message: "Item not found" });
        } else {
            users.splice(index, 1);
            saveUsersToFile();
            res.json({ message: "Deleted" });
        }
    });
    

    app.put("/updatepart/:id", (req, res) => {
        const id = parseInt(req.params.id);
        const { itemName, itemImage, skuCode, Barcode, productCode, Avaliable, inStock } = req.body;
        const index = users.findIndex((user) => user.itemId === id);
        if (index < 0) {
            res.status(404).json({ message: "Item not found" });
        } else {
            users[index] = { ...users[index], itemName, itemImage, skuCode, Barcode, productCode, Avaliable, inStock };
            saveUsersToFile();
            res.json({ message: "Updated" });
        }
    });

    // Start the server
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

function saveUsersToFile() {
    fs.writeFile('../src/databases/loginCredentials.SpareParts.json', JSON.stringify(users, null, 2), (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log('Users saved to file');
    });
}
