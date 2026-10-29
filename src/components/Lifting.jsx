import { useState } from "react";
import Inputcomponent from "./Inputcomponent";
//import Displaycomponent from "./Displaycomponent";
//import Displaycomponent from "./Displaycomponent";
function Lifting(){
    const [Inputvalue,setInputvalue]=useState("");
    return(
        <div>
            <Inputcomponent Inputvalue={Inputvalue} setInputvalue={setInputvalue}/>
            
        </div>
    );
}
export default Lifting;