import React, { useState } from 'react';
import axios from 'axios';

function CodeEditor() {
    const [language, setLanguage] = useState('javascript');
    const [code, setCode] = useState('');
    const [args, setArgs] = useState('');
    const [output, setOutput] = useState('');

    const executeCode = async () => {
        try {
            const response = await axios.post('/api/execute', { language, code, args: args.split(' ') });
            setOutput(response.data);
        } catch (error) {
            setOutput(error.response.data);
        }
    };

    return (
        <div>
            <select onChange={(e) => setLanguage(e.target.value)} value={language}>
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
            </select>
            <textarea value={code} onChange={(e) => setCode(e.target.value)} />
            <input type="text" value={args} onChange={(e) => setArgs(e.target.value)} placeholder="Arguments" />
            <button onClick={executeCode}>Execute</button>
            <pre>{output}</pre>
        </div>
    );
}

export default CodeEditor;
