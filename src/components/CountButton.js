import React, { useContext } from "react";
import { CountContext } from "./CountProvider";

export default function CountButton() {
    const { count,setCount } = useContext(CountContext);
    return (
        <button onClick={() => setCount(count + 1)}>Increment</button>
    )
}