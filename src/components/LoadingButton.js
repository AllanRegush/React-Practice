import React from "react";

export default function LoadingButton({isLoading, onClick, label}) {
    return (
        <button onClick={onClick} >
            {isLoading ? <div>I AM LOADING</div>: label}
        </button>
    )
}