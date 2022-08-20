import "./App.css";
// React Router Dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useState, useEffect } from "react";
import Home from "./components/Home/Home";
import Team from "./components/Team/Team";
import News from "./components/News/News";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import BounceLoader from "react-spinners/BounceLoader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {loading ? (
        <BounceLoader />
      ) : (
        <Router>
          <Parallax pages={3} style={{ left: "0", scrollbarColor: "red" }}>
            <ParallaxLayer sticky={{ start: 0, end: 3 }}>
              <NavBar />
            </ParallaxLayer>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/team" element={<Team />} />
              <Route path="/news" element={<News />} />
            </Routes>
            <ParallaxLayer offset={2} speed={2}>
              <Footer />
            </ParallaxLayer>
          </Parallax>
        </Router>
      )}
    </div>
  );
}

export default App;
