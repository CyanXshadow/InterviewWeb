import React, { useState } from 'react';
import axios from 'axios';

function InterviewManagement() {
    const [sessionId, setSessionId] = useState('');
    const [credentials, setCredentials] = useState('');

    const createSession = async () => {
        const response = await axios.post('/api/interview/create');
        setSessionId(response.data.sessionId);
    };

    const joinSession = async () => {
        const response = await axios.post('/api/interview/join', { sessionId });
        setCredentials(response.data.credentials);
    };

    return (
        <div>
            <button onClick={createSession}>Create Session</button>
            <input type="text" value={sessionId} onChange={(e) => setSessionId(e.target.value)} placeholder="Session ID" />
            <button onClick={joinSession}>Join Session</button>
            <pre>{credentials}</pre>
        </div>
    );
}

export default InterviewManagement;
