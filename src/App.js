import CounterDemonstrator from './components/CounterDemonstrator/CounterDemonstrator';
import { connect } from 'react-redux';
import { useCallback, useState } from 'react';
import {
    incCounter,
    decCounter,
    resCounter,
    setCounter
} from './store/actions/counter';

function App(props) {

    const [inp, setInp] = useState('');

    const onInputChange = useCallback(({ target: { value } }) => {
        setInp(value);
    }, [setInp]);

    const setCounter = useCallback(() => {
        props.setCounter(inp);
    })

    return (
        <div className="App">
            <CounterDemonstrator counterToShow={props.currentCounter} />
            <button onClick={props.incrementCounter}>+</button>
            <button onClick={props.decrementCounter}>-</button>
            <button onClick={props.resetCounter}>reset counter</button>
            <br />
            <input type='text' value={inp} onChange={onInputChange} />
            <button onClick={setCounter} > set counter </button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        currentCounter: state.counter,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        incrementCounter: () => dispatch(incCounter()),
        decrementCounter: () => dispatch(decCounter()),
        resetCounter: () => dispatch(resCounter()),
        setCounter: (number) => dispatch(setCounter(number))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);