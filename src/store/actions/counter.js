import {
    INCREMENT_COUNTER,
    DECREMENT_COUNTER,
    RESET_COUNTER,
    SET_COUNTER
} from '../../constans';

export const incCounter = () => ({ type: INCREMENT_COUNTER });
export const decCounter = () => ({ type: DECREMENT_COUNTER });
export const resCounter = () => ({ type: RESET_COUNTER });
export const setCounter = (info) => ({ type: SET_COUNTER, payload: info });


