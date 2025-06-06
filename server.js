const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Scroll Sanctuary Backend is running!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
