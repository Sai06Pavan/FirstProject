const express = require('express');
const session = require('express-session');
const path = require('path');
const authCheck = require('./middleware/auth');
const userController = require('./controllers/userController');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'your-secret',
  resave: false,
  saveUninitialized: true
}));

// Login route
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/login.html'));
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'user' && password === 'pass') {
    req.session.user = { username };
    return res.redirect('/'); // return here to stop further execution
  }
  res.send('Invalid credentials');
});

// API route with auth middleware
app.get('/api/users', authCheck, (req, res) => {
  userController.getUserData(req, res);
});

app.get('/', (req, res) => {
    res.send('Welcome to the Express Auth App');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});