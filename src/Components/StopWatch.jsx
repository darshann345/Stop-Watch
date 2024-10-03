import React, { useEffect, useState } from "react";

const StopWatch = () => {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervalId;

        if (isRunning) {
            intervalId = setInterval(() => {
                setSeconds((prev) => prev + 1);
            }, 1000);
        } else {
            clearInterval(intervalId);
        }

        return () => clearInterval(intervalId);
    }, [isRunning]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainSeconds = seconds % 60;
        return `${minutes}:${remainSeconds < 10 ? "0" : ""}${remainSeconds}`;
    };

    const handleStartStop = () => {
        setIsRunning((prev) => !prev);
    };

    const handleReset = () => {
        setIsRunning(false);
        setSeconds(0);
    };

    return (
        <>
            <h1>Stop Watch</h1>
            <p>Time: {formatTime(seconds)}</p>
            <button style={{ width: "45px", height: "15px" }} onClick={handleStartStop}>
                {isRunning ? "Stop" : "Start"}
            </button>&nbsp;
            <button style={{ width: "45px", height: "15px" }} onClick={handleReset}>Reset</button>&nbsp;
        </>
    );
};

export default StopWatch;
