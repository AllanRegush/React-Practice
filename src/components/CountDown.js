import React, { useEffect, useState } from "react";

export default function CountDown({ hours, min, sec }) {
    const [over, setOver] = useState(false);
    const [paused, setPaused] = useState(true);
    const [[hr, m, s], setTimer] = useState([hours, min, sec]);

    const tick = () => {
        if (paused || over) {
            return;
        }
        
        if (hr === 0 && m === 0 && s === 0) {
            setOver(true);
        } else if (m === 0 && s === 0) {
            setTimer([hr - 1, 59, 59]);
        } else if (s === 0) {
            setTimer([hr, m - 1, 59]);
        } else {
            setTimer([hr, m, s - 1]);
        }
    }

    useEffect(() => {
        let ticker = setInterval(() => tick(), 1000);
        return () => clearInterval(ticker);
    });

    const handlePause = () => setPaused(!paused)
    const handleReset = () => {
        setOver(false)
        setPaused(true)
        setTimer([hours, min, sec])
    }
    const fmt = (val) => val.toString().padStart(2, '0');

    return (
        <>
            <h3>{`${fmt(hr)}:${fmt(m)}:${fmt(s)}`}</h3>
            <button onClick={handlePause}>{paused ? 'Start' : 'Pause'}</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )
}