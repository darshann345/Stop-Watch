import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [flag, setFlag] = useState(false);

  useEffect(() => {


    
    let timer;
    console.log("Check",timer)
    if (flag) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1000);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [flag]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setFlag(false);
  };

  const handleReset = () => {
    setFlag(false);
    setTime(0);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds/60); 
    const remainSeconds = seconds % 60;  
    return `${minutes}:${remainSeconds < 10 ? "0" : ""}${remainSeconds}`
}

  return (
    <div>
      <h1>Stopwatch</h1>
      <div>Time: {formatTime(time)}</div>
      <button onClick={handleStart} disabled={isRunning}>Start</button>
      <button onClick={handleStop} disabled={!isRunning}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Stopwatch;
