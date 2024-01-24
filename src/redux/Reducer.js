const initial_state={
    count:0,
    loader:false
}
export const reducer=(state=initial_state,action)=>{
    if (action.type === "INCREMENT") {
        
        //state.loader=true,
    
        // ...state,loader:true
        // setTimeout(()=>{
        //     state.loader=false;
        //    },1000)
          
        return {
     count: state.count + 1, loader:false
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