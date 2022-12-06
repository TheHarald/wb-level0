function createStore(rootReducer, initialState) {
    const listeners = [];

    let state = rootReducer(initialState, {type: '__INIT__'});

    return {
        dispatch: (action) => {
            state = rootReducer(state, action);
            listeners.forEach(listener => listener());
        },
        subscribe(listener){
            listeners.push(listener);
        },
        getState: () => {
            return state
        },
    }
}