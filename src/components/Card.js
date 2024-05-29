import React from 'react';


export default function Card(props) {
    return (
        <section>
            <h2>{props.icon} Title</h2>
            {props.children}
        </section>
    )
}