import * as counterTypes from '../actions/counter';
import { updateObject } from '../utility';

const initialState = {
    counter: 0
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case counterTypes.INCREMENT:
            return updateObject(state, {counter: state.counter + 1});
        case counterTypes.DECREMENT:
            return updateObject(state, {counter: state.counter - 1});
        case counterTypes.ADD:
            return updateObject(state, {counter: state.counter + action.value});
        case counterTypes.SUBTRACT:
            return updateObject(state, {counter: state.counter - action.value});
        default:
            return state;
    }
};

export default reducer;