import React from 'react';
import prettier from 'prettier/standalone';
import parserBabel from 'prettier/parser-babel';
import parserPython from 'prettier-plugin-python';

function CodeFormatter({ language, code, setCode }) {
    const formatCode = () => {
        let formattedCode;
        try {
            if (language === 'javascript') {
                formattedCode = prettier.format(code, {
                    parser: 'babel',
                    plugins: [parserBabel]
                });
            } else if (language === 'python') {
                formattedCode = prettier.format(code, {
                    parser: 'python',
                    plugins: [parserPython]
                });
            }
            setCode(formattedCode);
        } catch (error) {
            console.error('Formatting error:', error);
        }
    };

    return <button onClick={formatCode}>Format Code</button>;
}

export default CodeFormatter;
