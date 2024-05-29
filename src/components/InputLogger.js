import React, { useState } from "react";


export default function InputLogger() {
    const [text, setText] = useState('');

    const evtHandler = (e) => {
        setText(e.target.value)
        console.log(e.target)
    }

    return (
        <>
            <input value={text} placeholder="Input some text" onChange={evtHandler}></input>
        </>
    );
}