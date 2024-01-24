export const add_counter=(data)=>{
    return{
         type:"INCREMENT",
         payload:{
           data:data
         }
    }
}
export const reduce_counter=(data)=>{
    return{
         type:"DECREMENT",
         payload:{
         data:data
         }
    }
}