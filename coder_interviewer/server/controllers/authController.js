const jwt = require('jsonwebtoken');

function login(req, res) {
    const { username, password } = req.body;
    
    // Replace with your own logic to validate the username and password
    if (username === 'admin' && password === 'password') {
        const token = jwt.sign({ id: 1, username }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return res.json({ token });
    }

    res.status(400).send('Invalid credentials');
}

module.exports = { login };
