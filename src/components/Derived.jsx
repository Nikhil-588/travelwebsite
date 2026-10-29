//import { use } from "react";
import { useState } from "react";

function Derived(){
    const [user,setuser]=useState(
        [
            {name:"nikhil", age:20},
            {name:"nithin" , age:20},
            {name:"harish" , age:20}
        ]
    );
    function deletefirst(){
        setuser(user.slice(1));
    }
    function adduser(){
        setuser([
            ...user,{name:"hlo" , age:222}
        ]);
    }
    const usercount=user.length;

    const avg=user.reduce((accum, e)=>accum+e.age,0)/usercount;
    return(
        <div>
           <ul>
            <button onClick={deletefirst}>delete</button><br />
            <button onClick={adduser}>add</button>
            {user.map((e ,index)=>{
                return(
                <li key={index}>
                    <p>{e.name}-{e.age}</p>
                </li>
                );
            })}
           </ul>
           <p>total users:{usercount}</p>
           <p>average:{avg}</p>
        </div>
    );
}
export default Derived;