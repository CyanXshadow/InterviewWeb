const express = require('express');
const cors = require('cors');
const authMiddleware = require('./middleware/auth');
const securityMiddleware = require('./middleware/security');
const codeExecutionRoutes = require('./routes/codeExecution');
const interviewRoutes = require('./routes/interview');

const app = express();

app.use(cors());
app.use(express.json());
app.use(authMiddleware);
app.use(securityMiddleware);

app.use('/api/code', codeExecutionRoutes);
app.use('/api/interview', interviewRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
