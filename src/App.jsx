import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import { BsArrowUp } from "react-icons/bs";
import Project from "./pages/Project";
import Playground from "./pages/Playground";
import Experience from "./pages/Experience";
import Gallery from "./pages/Gallery";

const App = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div className="relative z-0 bg-primary">
                <Gallery />
                <Footer />
              </div>
            }
          />
          <Route
            exact
            path="/project"
            element={
              <div className="proj_page relative bg-primary">
                <Project />
              </div>
            }
          />
          <Route exact path="/play" element={<Playground />} />
          <Route
            exact
            path="/Experience"
            element={
              <div className="bg-primary">
                <Experience />
              </div>
            }
          />
          <Route
            exact
            path="/Gallery"
            element={
              <div className="bg-primary">
                <Gallery />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
      {showBackToTop && (
        <button
          className="fixed bottom-4 right-4 p-2 cursor-pointer backToTop"
          onClick={handleBackToTop}
        >
          <BsArrowUp />
        </button>
      )}
    </div>
  );
};

export default App;
