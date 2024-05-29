import React, { useState } from "react";

export default function State() {
    const [count, setCount] = useState(0);
    const [prevCount, setPrevCount] = useState(0);

    const handleCount = () => {
        setPrevCount(count);
        setCount(count + 1);
    }

    return (
        <>
            <h2>Count: {count}</h2>
            <h2>Previous Count: {prevCount}</h2>
            <button onClick={handleCount} >Click Me</button>
        </>
    );
}