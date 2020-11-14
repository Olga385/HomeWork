const styleComp = { margin: '0 auto', width: '300px', textAlign: 'center' }

const CounterDemonsrtator = ({ counterToShow }) => {
    return (
        <div style={styleComp}>
            Counter is now <strong>{counterToShow}</strong>

        </div>
    )
}
export default CounterDemonsrtator;