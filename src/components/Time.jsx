import { useState } from "react";

function Time(){
     
    const [datetime,setdatetime]=useState();

     setInterval(()=>{
        const now=new Date();
     const currdate=now.toLocaleDateString();
     const currtime=now.toLocaleTimeString();
     setdatetime(`${currdate}-${currtime}`)
     })
    return(
        <div>
          <p>{datetime}</p>
        </div>
    );
}
export default Time;