const express = require('express');
const app = express();

let counter = 0;

// Serve static files
app.use(express.static('public'));

// API to increment counter
app.get('/api/increment', (req, res) => {
  counter++;
  res.json({ count: counter });
});

// Health check (important for deployments)
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(3000, () => {
  console.log('App running on port 3000');
});
