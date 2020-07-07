let initialState = {
    data: ""
}

function appReducerFunction(state=initialState, action){
    let stateCopy = JSON.parse(JSON.stringify(state));
    // eslint-disable-next-line default-case
    switch(action.type){
        case "set_data":
            stateCopy.data = action.payload;
            return stateCopy;
    }
    return state;

}

export default appReducerFunction;