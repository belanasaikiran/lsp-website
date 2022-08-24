import "./App.css";
// React Router Dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useState, useEffect } from "react";
import Home from "./components/Home/Home";
import Team from "./components/Team/Team";
import News from "./components/News/News";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import BounceLoader from "react-spinners/BounceLoader";
import Contact from "./components/ContactUs/Contact";
import LightKonnect from "./components/Products/LightKonnect";
import LightKonnectFiber from "./components/Products/LightKonnectFiber";
import LightSiP from "./components/Products/LightSiP";
import Error from "./components/404/Error404";
import Investors from "./components/Investors/Investors"

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <div>
      {loading ? (
        <div className=" flex  items-center justify-center justify-items-center w-screen h-screen" >
        <BounceLoader />
        </div>
      ) : (
        <Router>
       
              <NavBar />

            <Routes  >
              <Route path="/" element={<Home />} />
              <Route path="/company/team" element={<Team />} />
              <Route path="/company/news" element={<News />} />
              <Route path="/company/investors" element={<Investors />} />
              <Route path="/products/lightkonnect" element={<LightKonnect />} />
              <Route path="/products/lightkonnectFiber" element={<LightKonnectFiber />} />
              <Route path="/products/lightsip" element={<LightSiP />} />
              <Route path="*" element={<Error />} />
              <Route path="/contact" element={<Contact />} />

            </Routes>
              <Footer />
        </Router>
      )}
    </div>
  );
}

export default App;
