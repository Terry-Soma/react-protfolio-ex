import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import "./stylesheets/home.css";
import "./stylesheets/header-footer.css";
import "./stylesheets/carousel.css";
import "./stylesheets/project-courses.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 500
});
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/projects" exact element={<Projects />} />
          <Route path="/courses" exact element={<Courses />} />
          <Route path="/contact" exact element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
