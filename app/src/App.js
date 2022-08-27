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
import Investors from "./components/Investors/Investors";
import Gallery from "./components/Gallery/Gallery";
import AzadiKaAmritMahotsav from "./components/Gallery/AzadiKaDigitalMahotsav"
import ScrollToTop from "react-scroll-up";

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
        <div className=" flex  items-center justify-center justify-items-center w-screen h-screen">
          <BounceLoader />
        </div>
      ) : (
        <Router>
          <NavBar />
          <ScrollToTop showUnder={160}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12  hover:text-red-900 hover:border-2 hover:border-red-900 bg-white hover:opacity-100 opacity-50  p-2  m-8 text-red-900 rounded-full drop-shadow-xl"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
                />
              </svg>
            </span>
          </ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/company/team" element={<Team />} />
            <Route path="/company/news" element={<News />} />
            <Route path="/company/investors" element={<Investors />} />
            <Route path="/company/gallery" element={<Gallery />} />

            <Route path="/company/gallery/AzadiKaDigitalMahotsav" element={<AzadiKaAmritMahotsav />} />
            <Route path="/products/lightkonnect" element={<LightKonnect />} />
            <Route
              path="/products/lightkonnectFiber"
              element={<LightKonnectFiber />}
            />
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
