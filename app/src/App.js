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
        <div className=" flex  items-center justify-center justify-items-center w-screen h-screen" >
        <BounceLoader />
        </div>
      ) : (
        <Router>
       
              <NavBar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/" element={<Team />} />
              <Route path="/news" element={<News />} />
            </Routes>
              <Footer />
        </Router>
      )}
    </div>
  );
}

export default App;
