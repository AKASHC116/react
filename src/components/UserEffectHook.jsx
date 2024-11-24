import { useEffect,useState } from "react";
 const useEffectHook = () =>{
    const [ username,setUsername] = useState("");
    useEffect(() => {
        console.log("This is useEffectHook");
    },[]);
    return (
        <>
        <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e,target.value)}
        />
        </>
    );
};