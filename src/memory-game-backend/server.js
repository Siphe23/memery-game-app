const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors({ origin: '*' })); // Allows any origin to access the API

// Generate cards (18 pairs)
const generateCards = () => {
  const cardValues = Array.from({ length: 18 }, (_, index) => index + 1);
  const cards = [...cardValues, ...cardValues] // duplicate for pairs
    .sort(() => Math.random() - 0.5); // shuffle the cards
  return cards.map((card, index) => ({ id: index, value: card, flipped: false }));
};

app.get('/cards', (req, res) => {
  res.json(generateCards());
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
