import { useState } from "react";

function State(){
    console.log("hii parent")
    
    const [count,setcount] =useState(0);
    function handle2(){
        setcount(()=>count+1);
    }
    return(
        <>
        <div>
            <h1>{count}</h1>
         <button onClick={handle2}>
            Increment
         </button>
        </div>
        <Childcomponent count={count}/>
        <AChildcomponent count={count}/>
        </>
    );
}

export default State;

function Childcomponent({count}){
    console.log("hii Childcomponent")
    return(
        <div>
            <h2>Childcomponent-{count}</h2>
        </div>
    );
}

function AChildcomponent({count}){
    console.log("hii AChildcomponent")
    return(
        <div>
            <h2>AAA Childcomponent-{count}</h2>
        </div>
    );
}