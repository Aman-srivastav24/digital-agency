import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from './components/utilis/ScrollToTop.jsx'; // Import the ScrollToTop component

// Component imports
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";
import { ContactPageTwo } from "./components/Contact/Contact.jsx";
import { SalesForceTraining } from "./components/Training/SalesForceTraining.jsx";

import About from "./components/About/About.jsx";
import Career from "./components/Career/Career.jsx";
import ChatBox from "./components/ChatBot/ChatBot.jsx";
import SalesforceImplementation from "./components/Services/SalesforceImplementation.jsx";
import Training from "./components/Training/Training.jsx";
import ItServices from "./components/Services/ItServices.jsx";
import WebDev from "./components/Services/WebDev.jsx";



const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop /> {/* Add the ScrollToTop component */}
      <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
        <Navbar />
        <ChatBox/>
        <main className="pt-[80px]"> {/* Adjust this value based on the height of your navbar */}
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/services" element={<Services />} />
            <Route path="/training" element={<Training />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/about" element={<About/>}/>
            <Route path="/career" element={<Career/>}/>
            <Route path="/contact" element={<ContactPageTwo />} />
            <Route path="/salesforcetraining" element={<SalesForceTraining />} />
            {/* itservices  */}
            <Route path="/itservice" element={<ItServices/>}/>
            <Route path="/implementation" element={<SalesforceImplementation />} />
            <Route path="/webdevService" element={<WebDev />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
