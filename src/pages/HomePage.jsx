import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { add_counter, loading, reduce_counter } from "../redux/Action";
import CircularProgress from "@mui/material/CircularProgress";

function HomePage() {
  var count = useSelector((state) => state.count);
  var loader = useSelector((state) => state.loader);

  var dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(add_counter());
  };

  const handleReduce = () => {
    dispatch(reduce_counter());
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch(loading());
    }, 500);
  }, [handleAdd, handleReduce]);

  return (
    <div>
      <h2 style={{ textAlign: "center", marginBottom:"10%",fontSize:"30px"}}>Counter app</h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height:"40px"
      
        }}
      >
        <button onClick={handleAdd} style={{ backgroundColor: "#cccccc",marginRight:"20px",fontSize:"20px",fontWeight:"bold"}}>
          +
        </button>

        <div style={{fontSize: "23px",width: "50px",textAlign:"center"}}>
          {loader ? <CircularProgress /> :  count }
        </div>
        <button
          disabled={count < 1}
          onClick={handleReduce}
          style={{ marginLeft: "20px", backgroundColor: "#cccccc",fontSize:"20px",fontWeight:"bold" }}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default HomePage;
