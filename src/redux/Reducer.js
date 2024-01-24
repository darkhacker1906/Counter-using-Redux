const initial_state={
    count:0
}
export const reducer=(state=initial_state,action)=>{
    if (action.type === "INCREMENT") {
        return {
     count: state.count + 1
        };
    }
     else if (action.type === "DECREMENT") {
        return {
            count: state.count - 1
        };
    } 
    else {
        return state;
    }
}