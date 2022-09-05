import { BrowserRouter, Route, Routes,  } from "react-router-dom";
// import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import NoMatchfound from "./Components/Layout/NoMatchfound";
import Products from "./Components/Products/Products";
import CartStateProvider from "./Components/Products/Store.js/CartStateProvider";
import Mycart from "./pages/Mycart";
import ContactUs from "./pages/ContactUs";
import {React} from "react";
import Login from "./pages/Login";
import { AuthContextProvider } from "./store/auth-context";

function App() {

    //  const [isLogin, setIsLogin] = useState(true);
      // const authCtx = useContext(AuthContext)

  return (

      <AuthContextProvider>
      <CartStateProvider>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        {/* {!authCtx.isLoggedIn && <Route path="/login" element={<Login />}></Route>}
         {authCtx.isLoggedIn && <Route path="/store" element={<Products />}></Route>} */}
         <Route path="/store" element={<Products />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contactus" element={<ContactUs />}></Route>
        <Route path="/mycart" element={<Mycart />}></Route>
        <Route path="*" element={<NoMatchfound/>}></Route>
      </Routes>
    </BrowserRouter>
    </CartStateProvider>
   </AuthContextProvider>
  );
}

export default App;