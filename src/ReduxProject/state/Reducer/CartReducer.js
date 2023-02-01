const reducer = (state=0,action)=>{
    if(action.type==="add"){
        return state+action.payload
    }
    else if(action.type==="remove"){
        if(state!==0)
        return state-action.payload
        else 
        return state;
    }
    else
    return state
}

export default reducer;