const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 9002; // You can choose any available port
const cors = require('cors'); // Import the cors package

app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:3000', // Replace with the origin of your React app
    optionsSuccessStatus: 200 // Some legacy browsers choke on 204
}));

const databaseFilePath = '../src/databases/loginCredentials.supportRequest.json';
const nextIdFilePath = './nextId.json'; // Path to the file storing nextId

// Read the initial value of nextId from the file
let nextIdData = fs.readFileSync(nextIdFilePath);
let nextIdObj = JSON.parse(nextIdData);
let nextId = nextIdObj.nextId;

// Endpoint to fetch data from the database
app.get('/api/data', (req, res) => {
  fs.readFile(databaseFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading the database file');
      return;
    }
    res.json(JSON.parse(data));
  });
});

// Endpoint to handle form submissions and update the database
app.post('/api/submit', (req, res) => {
  const formData = req.body;

  fs.readFile(databaseFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading the database file');
      return;
    }

    let database = JSON.parse(data);
    const newEntry = { id: nextId++, ...formData }; // Add ID to the new entry
    database.push(newEntry);

    fs.writeFile(databaseFilePath, JSON.stringify(database, null, 2), err => {
      if (err) {
        console.error(err);
        res.status(500).send('Error writing to the database file');
        return;
      }

      // Update nextId in the file
      nextIdObj.nextId = nextId;
      fs.writeFile(nextIdFilePath, JSON.stringify(nextIdObj), err => {
        if (err) {
          console.error(err);
          res.status(500).send('Error updating nextId');
          return;
        }
        res.status(200).send('Form data submitted successfully');
      });
    });
  });
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
