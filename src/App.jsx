import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
} from "./container";
import { Navbar } from "./components";
import "./App.scss";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { useEffect, useRef } from "react";

const App = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollEl = document.querySelector("#main-container");
    const scroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      lerp: 0.1,
      multiplier: 1,
      class: "is-inview",
    });

    // return () => {
    //   scroll.destroy();
    // };
  }, []);
  return (
    <div
      id="main-container"
      data-scroll-container
      style={{
        perspective: "1px",
      }}
    >
      <section data-scroll-section className="">
        <Navbar />
        <Header />
        <AboutUs />
        <SpecialMenu />
        <Chef />
        <Intro />
        <Laurels />
        <Gallery />
        <FindUs />
        <Footer />
      </section>
    </div>
  );
};

export default App;
