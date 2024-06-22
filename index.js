const express = require('express');
const fetch = require('node-fetch');

const app = express();
const PORT = 3000;
const API_KEY = 'ttps://jsonplaceholder.typicode.com/todos/1'; // API Key


app.get('/karel', async (req, res) => {
res.send(`Karolus jone kalang Belajar terus yahh jangan malas" oky whwhwhw 😁`)
});

app.get('/users', async (req, res) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/users/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const users = await response.json();
    if (!users.id) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});






app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
