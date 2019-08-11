import * as resultTypes from '../actions/result';
import { updateObject } from '../utility';

const initialState = {
    results: []
};

const deleteResult = (state, action) => {
    const updatedArray = state.results.filter(result => result.id !== action.resultElId);
    return updateObject(state, {results: updatedArray});
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case resultTypes.STORE_RESULT: return updateObject(state, {results: state.results.concat({id: new Date(), value: action.result})});
        case resultTypes.DELETE_RESULT: return deleteResult(state, action);
        default: return state;
    }
};

export default reducer;