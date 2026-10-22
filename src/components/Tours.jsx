import Navbar from "./Navbar";
import travelData from "./travel.json";
function Tours(){
    return(
        <div>
            <Navbar/>
        <div className="bg-blue-100">
            <h1 className="font-bold text-black ml-140 text-2xl py-10 justify-center text-gray-700" >POPULAR DESTINATIONS</h1>
            <div className="flex px-10 gap-10 py-3 ">
            {travelData.map((e)=>(
                <div key={e.id} className="border-2 w-50 border border-black hover:scale-105  rounded-[6px]">
                        <img src="/image.png" alt="image" className="w-50 h-40 border rounded-[1px]"/>
                        < div className="bg-blue-50">
                        <p className="text-blue-500 mx-3">📍 {e.location}</p>
                        <p className="text-blue-400 mx-3"> ⭐ {e.rating}</p>
                         <a href={e.url} target="_blank" className="border border-black  flex justify-center bg-blue-600 hover:scale-103 w-auto">View Details</a>
                         </div>
                </div>
            ))}
            </div>
        </div>
        </div>
    );
}
export default Tours;