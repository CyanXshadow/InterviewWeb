import React from 'react';
import CodeEditor from '../components/CodeEditor';
import SessionLink from '../components/SessionLink';

function HomePage() {
    return (
        <div>
            <h1>Home Page</h1>
            <SessionLink />
            <CodeEditor />
        </div>
    );
}

export default HomePage;
