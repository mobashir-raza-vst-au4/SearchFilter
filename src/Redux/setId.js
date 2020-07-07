let initialState = {
    id: 1
}

function appReducerFunction(state=initialState, action){
    let stateCopy = JSON.parse(JSON.stringify(state));
    // eslint-disable-next-line default-case
    switch(action.type){
        case "set_id":
            stateCopy.id = action.payload;
            return stateCopy;
    }
    return state;

}

export default appReducerFunction;