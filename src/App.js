import React, { useState, useMemo } from 'react';
import Button from './components/Button';
import Preloader from './components/Preloader';

const App = () => {
    const [loading, setLoading] = useState(false);
    const [isLoggedIn, setLoggedIn] = useState(false);

    const handleLogin = () => {
        new Promise((res) => {
            setLoading(true);
            setTimeout(() => {
                res();
            }, 2000)
        })
            .then(() => {
                setLoggedIn(true);
            })
            .finally(() => {
                setLoading(false);
            })
    };

    const content = useMemo(() => {
        if (loading) {
            return (<Preloader />)
        } else if (isLoggedIn) {
            return (<p>Hello there!</p>);
        } else {
            return (<Button click={handleLogin} />)
        }
    }, [loading, isLoggedIn]);

    return (
        <>
            {content}
        </>
    )
}
export default App;