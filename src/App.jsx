import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Characters from "./Components/Character";
import Carousel from "./Components/Carousel";
import Footer from "./Components/Footer";

function App() {
  return (
   <>
   <div className=" md:mx-40">
   <Navbar/>
   <Hero/>
   <Characters/>
   <Carousel/>
   </div>
   <Footer/>
   </>
  );
}

export default App;
