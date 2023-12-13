const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

// Sample in-memory database
const users = [];
 
app.post('/api/register', (req, res) => {
  const { username, password } = req.body;

  // Check if user already exists
  if (users.find(user => user.username === username)) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Create a new user
  const newUser = { username, password, id: users.length + 1 };
  users.push(newUser);

  // Generate a token
  const token = jwt.sign({ userId: newUser.id }, 'your-secret-key');

  res.json({ token });
});

// Other routes...

const PORT = 3000; 
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
