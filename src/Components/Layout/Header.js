import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  const navigate = useNavigate();

  const authCtx = useContext(AuthContext);
  // const islogin = authCtx.login();
  const islogin = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
    check();
  };

  const check = () => navigate("/login");

  return (
    <>
      <header className={classes.header}>
        {/* <div className={classes.login}> 
          {!islogin && <Link to="/login">Login</Link>}
          </div> */}
        <nav className={classes.navbar}>
          {<div>{!islogin && <Link to="/login">Login</Link>}</div>}
          {islogin && (
            <div>
              <button onClick={logoutHandler}>Logout</button>
            </div>
          )}
          <Link to="/home">Home</Link>

          {islogin && <Link to="/store">Store</Link>}

          <Link to="/about">About</Link>
          <Link to="/contactus">Contact Us</Link>

          {/* <HeaderCartButton onClick={props.onShowCart} /> */}
          <HeaderCartButton />
        </nav>
      </header>
      <div className={classes.title}>
        <h1>The Generics</h1>
      </div>
    </>
  );
};

export default Header;
