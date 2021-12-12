import "./App.css";
import Cta from "./containers/cta/Cta";
import Cta2 from "./containers/cta/Cta2";
import Header from "./containers/header/Header";
import Navbar from "./containers/navbar/Navbar";
import Outro from "./containers/outro/Outro";
import Footer from "./containers/footer/Footer";
import { useEffect, useState } from "react";
import PreFooter from "./containers/prefooer/PreFooter";
function App() {
  useEffect(() => {
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    let observer = new IntersectionObserver(callbackFunc, options);

    observer.observe(document.getElementById("yoyo"));
    observer.observe(document.getElementById("section2"));
  }, []);
  function callbackFunc(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("inview");
      } else {
        entry.target.classList.remove("inview");
      }
    });
  }

  const [offset, setOffset] = useState(0);
  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Navbar />
      <Header />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
   
      <div
        style={{
          transform: `translateY(${offset * -0.1}px)`,
        }}
      >
        <Cta />
      </div>
      <div>
        <Cta2 />
      </div>
      <Outro />
      <PreFooter />
      <Footer />
    </>
  );
}

export default App;
