import React, { useState } from 'react';
import Form from './components/Form';
import RandomBtn from './components/RandomBtn';

const App = () => {

    const [text, setText] = useState('');
    const [list, setList] = useState([]);
    const [randomText, setRandomText] = useState(null);

    const textChange = ({ target }) => {
        setText(target.value)
    }

    const addListInArr = () => {
        setList([...list, text])
    }

    const listRandom = () => {
        let index = Math.floor(Math.random() * list.length)
        setRandomText(() => {
            return list[index];
        })
    }

    return (
        <>
            <h1>MY APP</h1>

            <Form textChange={textChange} addListInArr={addListInArr} />
            <RandomBtn click={listRandom} value={randomText} />

            <div>
                {
                    list.map((word, i) => {
                        return <p key={i}>{word}</p>
                    })
                }
            </div>
        </>
    );
};

export default App;