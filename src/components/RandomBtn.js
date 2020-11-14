import React from 'react';

const RandomBtn = ({ value, click }) => {
    return (
        <>
            <button onClick={click}>Your choice</button>
            <h2>{value}</h2>
        </>
    )
}

export default RandomBtn;