import React, { useRef } from "react";
import Home from "./components/Home";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import Videos from "./components/Videos";
import Gallery from "./components/Gallery";
import ServiceSlider from "./components/ServiceSlider";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutUsRef = useRef(null);
  const videosRef = useRef(null);
  const galleryRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactUsRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    window.scrollTo({
      top: sectionRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <Home
        scrollToSection={scrollToSection}
        refs={{
          home: homeRef,
          services: servicesRef,
          aboutUs: aboutUsRef,
          videos: videosRef,
          gallery: galleryRef,
          testimonials: testimonialsRef,
          contactUs: contactUsRef,
        }}
      />
      <section ref={servicesRef}>
        <Services />
      </section>
      <section ref={aboutUsRef}>
        <AboutUs />
      </section>
      <section ref={videosRef}>
        <Videos />
      </section>
      <section ref={galleryRef}>
        <Gallery />
      </section>
      <section ref={testimonialsRef}>
        <ServiceSlider />
      </section>
      <section ref={contactUsRef}>
        <ContactUs />
      </section>
      <Footer />
    </div>
  );
}

export default App;
