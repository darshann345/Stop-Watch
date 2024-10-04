import React, { useEffect } from "react";
import {useState} from "react";
const StopWatch = () => {
    const [data,setData] = useState(0);
    const [flag,setFlag] = useState(false)
    useEffect(()=>{
        let interId;
        if(flag){
            interId = setInterval(() => {
                setData((prevData)=>prevData + 1)
            },1000) 
        }
        else{
            clearInterval(interId)
        }
        return () => clearInterval(interId)
        
    },[flag])
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds/60); 
        const remainSeconds = seconds % 60;  
        return `${minutes}:${remainSeconds < 10 ? "0" : ""}${remainSeconds}`
    }
    const handleStart = () => {
        setFlag(!flag)
    }
    const handleReset = () => {
        setFlag(false)
        setData(0);
    }
    return(
        <>
            <h1>Stop Watch</h1>
            <p>Time : {formatTime(data)}</p>
            <button styles = {{width : "45px" , height : "15px"}} onClick = {handleStart}>{flag ? "Stop" : "Start"}</button>&nbsp;
            <button styles = {{width : "45px" , height : "15px"}} onClick={handleReset}>Reset</button>&nbsp;

        </>
    )
}
export default StopWatch;