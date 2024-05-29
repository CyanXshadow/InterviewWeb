import React, { useState, useEffect } from 'react';

function Timer({ initialTime }) {
    const [time, setTime] = useState(initialTime);

    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(prevTime => prevTime - 1);
        }, 1000);

        return () => clearInterval(timerId);
    }, []);

    return <div>Time Remaining: {time}s</div>;
}

export default Timer;
