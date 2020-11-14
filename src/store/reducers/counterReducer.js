import {
    INCREMENT_COUNTER,
    DECREMENT_COUNTER,
    RESET_COUNTER,
    SET_COUNTER
} from '../../constans';


const defaultState = {
    counter: 0
}

const counterReducer = (state = defaultState, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return {
                ...state,
                counter: state.counter + 1
            }
        case DECREMENT_COUNTER:
            return {
                ...state,
                counter: state.counter - 1
            }
        case RESET_COUNTER:
            return {
                ...state,
                counter: defaultState.counter
            }
        case SET_COUNTER:
            return {
                ...state,
                counter: + action.payload + state.counter
            }
        default: return state
    }
}
export default counterReducer;