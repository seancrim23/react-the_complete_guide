export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

const saveResult = result => {
    return {
        type: STORE_RESULT,
        result
    };
}

export const storeResult = result => {
    return (dispatch, getState) => {
        setTimeout(() => {
            const oldCounter = getState().ctr.counter;
            console.log(oldCounter);
            dispatch(saveResult(result));
        }, 2000);
    }
};

export const deleteResult = id => {
    return {
        type: DELETE_RESULT,
        resultElId: id
    };
};