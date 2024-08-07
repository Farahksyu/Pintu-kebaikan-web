import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import Layanan from "./components/Layanan/Layanan";
import Aktivitas from "./components/Aktivitas/Aktivitas";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Section />
      <Layanan />
      <Aktivitas />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
