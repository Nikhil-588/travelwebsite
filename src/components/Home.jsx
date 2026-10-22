import About from "./About";

import Tours from "./tours";
function Home() {
    return (
        <div>
            {/* <img src="image.png" alt="asd" className="w-full h-160 object-cover" /> */}
            <div
                style={{
                    backgroundImage: "url('/image.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
                className=" w-full h-150"
            >
                 <h1 className="mx-auto max-w-7xl font-bold text-3xl py-65">"Take Only Memories, Leave Only Foot steps"</h1>
            </div>

            <Tours />
            <About />
        </div>
    );
}
export default Home;

