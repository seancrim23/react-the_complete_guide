export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';

export const increment = () => {
    return {
        type: INCREMENT
    };
};

export const decrement = () => {
    return {
        type: DECREMENT
    };
};

export const add = value => {
    return {
        type: ADD,
        value
    };
};

export const subract = value => {
    return {
        type: SUBTRACT,
        value
    };
};