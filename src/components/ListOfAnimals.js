import React from "react";

export default function ListOfAnimals() {
    const data = [
        { id: 1, name: 'Snowball'},
        { id: 2, name: 'Fido'}
    ];

    return (
        <div>
            <ul>
                {data && data.map(({ id, name }) => {
                    return <li key={id}>{name}</li>
                })}
            </ul>
        </div>
    )
}