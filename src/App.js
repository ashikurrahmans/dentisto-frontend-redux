import { Route, Routes } from "react-router-dom";
import "./App.css";
import Menu from "./Components/Header/Menu";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import NotFound404 from "./Components/404/NotFound404";
import Services from "./Components/Services/Services";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import Registration from "./Components/Login/Registration";
import ForgetPassword from "./Components/Login/ForgetPassword";
import ServiceDetails from "./Components/Services/ServiceDetails";
import Checkout from "./Components/Services/Checkout";
import Blog from "./Components/Blog/Blog";
import RequiredAuth from "./Components/RequiredAuth/RequiredAuth";

function App() {
  return (
    <div>
      <Menu></Menu>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/service/:id" element={<ServiceDetails />} />
        <Route
          path="/checkout"
          element={
            <RequiredAuth>
              <Checkout />
            </RequiredAuth>
          }
        />
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
