//import { useState } from "react";
import Displaycomponent from "./Displaycomponent";
function Inputcomponent({Inputvalue,setInputvalue})
{
    //const [Inputvalue,setInputvalue]=useState("");
    return(
        <div className="justify-center">
            <Displaycomponent Inputvalue={Inputvalue} />

           <input type="text" 
           placeholder="enter your info"
           value={Inputvalue}
           onChange={(e)=>setInputvalue(e.target.value)}
           />
        </div>
    );
}
export default Inputcomponent;