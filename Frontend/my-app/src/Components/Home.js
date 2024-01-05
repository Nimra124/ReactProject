import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { increment,decrement } from "../ReduxToolKit/Slice/CounterSlice";

const Home = () =>{

    const dispatch=useDispatch();
    let select=useSelector((state)=>state.counter.value);


return(<>

<h1 className="text-center mt-5"> Home Page</h1>

<br></br>
<br></br>
<div style={{display:"flex",justifyContent:"center"}}>
<button className="btn btn-secondary" onClick={()=>{dispatch(increment())}}>Increment</button>
<h5 style={{border: " 6px solid grey", padding:"20px",margin:"20px"}}>{select}</h5>
<button className="btn btn-secondary" onClick={()=>{dispatch(decrement())}}>Decrement</button>
</div>
</>)

}

export default Home;