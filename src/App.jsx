
  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import Navbar from "./components/Navbar";
  import Home from "./components/Home";
  import About from "./components/About";
  import Tours from "./components/tours";
  import Sign from "./components/Sign"

  function App() {
    return (
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign" element={<Sign/>}/>
        </Routes>
      </BrowserRouter>
    );
  }

  export default App;
