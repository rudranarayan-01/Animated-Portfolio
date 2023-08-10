import "./App.css";
import Footer from "./Component/Footer/Footer";
import Contact from "./Component/Contact/Contact.jsx"
import Intro from "./Component/Intro/Intro.jsx"
import Service from "./Component/Services/Service.jsx"
import Experience from "./Component/Experience/Experience.jsx"
import Works from "./Component/Works/Work.jsx"
import Testimonial from "./Component/Testimonial/Testimonial.jsx"
import Portfolio from "./Component/Portfolio/Portfolio.jsx"
import Navbar from "./Component/Navbar/Navbar";
import { useContext } from "react";
import { themeContext } from "./Context";


function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar/>
      <Intro/>
      <Service/>
      <Experience />
      <Works />
      <Portfolio />
      <Testimonial />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;