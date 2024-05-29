import React, { useContext } from "react";
import { CountContext } from "./CountProvider";

export default function Count() {
    const { count } = useContext(CountContext);
    return (
        <h3>{count}</h3>
    )
}