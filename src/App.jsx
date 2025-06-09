import React from "react";
import Header from "./components/Header";
import SectionImagem from "./components/SectionImagem";
import Section from "./components/Section";
import SectionEvents from "./components/SectionEvents";
import SectionExperiencies from "./components/SectionExperiencies";
import FlorestTime from "./components/FlorestTime";
import SectionContact from "./components/SectionContact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <SectionImagem />
      <Section />
      <SectionEvents />
      <SectionExperiencies />
      <FlorestTime />
      <SectionContact />
      <Footer />
    </>
  );
};

export default App;
