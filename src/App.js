import "./App.css";
import Footer from "./components/global/Footer";
import { Route, Routes } from "react-router";
import Navbar from "./components/global/Navbar";
import { About, Contact, Home, Process, Services } from "./pages/index";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Services />} />
        <Route path="/process" element={<Process />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
