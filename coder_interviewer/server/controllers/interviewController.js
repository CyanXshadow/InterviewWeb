function createInterviewSession(req, res) {
    const sessionId = Math.random().toString(36).substr(2, 9);
    res.json({ sessionId });
}

function joinInterviewSession(req, res) {
    const { sessionId } = req.body;
    const credentials = { sessionId, token: Math.random().toString(36).substr(2, 9) };
    res.json({ credentials });
}

module.exports = { createInterviewSession, joinInterviewSession };
