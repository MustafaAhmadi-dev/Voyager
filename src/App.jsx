import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Models from "./Pages/Models";
import TestimonialsPage from "./Pages/TestimonialsPage";
import Contact from "./Pages/Contact";

import "../src/dist/styles.css";
import BookCar from "./components/BookCar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/#booking" element={<BookCar />}/>
          </Route>
          <Route path="about" element={<About />} />
          <Route path="models" element={<Models />} />
          <Route path="testimonial" element={<TestimonialsPage />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
