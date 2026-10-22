function Sign(){
    return(
        <div className="flex justify-center">
          <div className="border-2 rounded-lg p-8 my-10 w-[400px]">
            <div className="flex justify-center font-bold text-blue-600">
            <h1>Sign In</h1>
            </div>
            <label htmlFor="name" className="block mb-2 ">Name :</label> <br />
            <input type="text" placeholder="Full name"  required className=" border-2 rounded-lg w-full p-2 mb-4"/>
            <br/>
            <label htmlFor="email" className="block mb-1">Email :</label> <br />
            <input type="email"  placeholder="Email" required className= " border-2 rounded-lg w-full p-2 mb-4"/>
            <br />
            <label htmlFor="password" className="block mb-2">Password :</label> <br />
            <input type="password" placeholder="password" required className=" border-2 rounded-lg w-full p-2 mb-3" />
          </div>
        </div>
    );
}
export default Sign;