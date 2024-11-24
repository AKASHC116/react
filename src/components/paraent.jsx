// import { useState } from "react"
// import Child from "./child"

import { Component } from "react";

// const Parent = () =>{
//     const [username, setUsername] = useState("")


// const changeFunc = () =>{
//     setUsername("GMIT");
// };
// return (
//     <>
//     <p className="paragraph">{username}</p>
//     <button onClick={() =>changeFunc()}>click Me</button>
//     <Child value = {username}/> 
//     </>


// );
// };
 
// export default Parent;


import { useState } from "react";
const Parent =()=> {
    const [username, setUsername] = useState("Test")
    const changeUsername =() =>{
        setUsername("change value")
        
    };
    return(
        <>
        <p> this value is {username} </p>
        <button onClick={() =>changeUsername()}>click me </button>
        </>
     
    )
}
export default Parent;