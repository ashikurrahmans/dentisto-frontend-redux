import { Route, Routes } from "react-router-dom";
import "./App.css";
import Menu from "./Components/Header/Menu";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import NotFound404 from "./Components/404/NotFound404";
import Services from "./Components/Services/Services";
import Portfolio from "./Components/Portfolio/Portfolio";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import Registration from "./Components/Login/Registration";
import ForgetPassword from "./Components/Login/ForgetPassword";

function App() {
  return (
    <div>
      <Menu></Menu>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
