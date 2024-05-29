import React, { useState } from 'react';

function SessionLink() {
    const [link, setLink] = useState('');

    const generateLink = () => {
        const newLink = `https://example.com/session/${Math.random().toString(36).substr(2, 9)}`;
        setLink(newLink);
    };

    return (
        <div>
            <button onClick={generateLink}>Generate Session Link</button>
            <pre>{link}</pre>
        </div>
    );
}

export default SessionLink;
