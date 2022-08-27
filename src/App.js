import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact"
import NoMatchfound from "./Components/Layout/NoMatchfound";
import Products from "./Components/Products/Products";


function App() {

  return (

      <BrowserRouter>
      <Cart/>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/store" element={<Products />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<NoMatchfound/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;