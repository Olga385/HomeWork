import React, { useState, useEffect } from 'react';
import Button from './components/Button';
import Preloader from './components/Preloader';

const App = () => {

    const [loading, setLoading] = useState(false);

    const LoadingFunc = () => {
        setLoading(!loading);
    }

    useEffect(() => {
        if (loading) {
            setTimeout(() => {
                setLoading(false)
            }, 3000)
        }
    }, [loading])

    if (loading) return <Preloader />

    return (
        <>
            <Button click={LoadingFunc} />
        </>
    )
}
export default App;