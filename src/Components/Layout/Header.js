import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  

    return (
    <>
        <header className={classes.header}>
            <nav className={classes.navbar}>
            <Link to='/home'>Home</Link>
                <Link to='/store'>Store</Link>
            <Link to='/about'>About</Link>
            <Link to="/contactus">Contact Us</Link>
                {/* <HeaderCartButton onClick={props.onShowCart} /> */}
                <HeaderCartButton/>

            </nav>
        </header>
        <div className={classes.title}>
            <h1>The Generics</h1>
        </div>
    </>
)}

export default Header;