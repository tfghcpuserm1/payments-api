const express = require('express');
const app = express();

// Simulated request handler
app.get('/user', (req, res) => {
  const userId = req.query.id;

  const query = "SELECT * FROM users WHERE id = " + userId;

  const file = req.query.file;
  res.sendFile('/uploads/' + file);
});

app.listen(3000);
