import React,{useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { add_counter, reduce_counter } from '../redux/Action';
import CircularProgress from '@mui/material/CircularProgress';

function HomePage() {
  var count=useSelector((state)=>state.count);
  const [loading,setLoading]=useState(false);
  const handleAdd=()=>{
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      dispatch(add_counter());
    }, 1000);
   
  }

  const handleReduce=()=>{
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      dispatch(reduce_counter());
    }, 1000);
   
  }

  var dispatch=useDispatch();
      return (
     <div>
         <h2 style={{textAlign:"center"}}>Counter app</h2>
         <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
      <button onClick={handleAdd} style={{backgroundColor:"#7373e9"}}>+</button>
      Counter {count }
      {loading && <CircularProgress/>}
       <button disabled={ count<1}onClick={handleReduce} style={{marginLeft:"10px",backgroundColor:"#7373e9"}}>-</button></div>
      
      </div>
  )
}

export default HomePage


