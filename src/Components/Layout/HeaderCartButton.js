import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import React, { useContext } from "react";
import CartProvider from '../Products/Store.js/CartProvider'
import { useNavigate } from 'react-router-dom';

const HeaderCartButton = () => {
    const a=useContext(CartProvider)
const navigate = useNavigate()
    const onShowCart = ()=>{
     navigate('./mycart')
    }


    return <button onClick={onShowCart} className={classes.button}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Cart</span>
        <span className={classes.badge}></span>
        <span className={classes.badge}>{a.prodID.length}</span>

    </button>
}

export default HeaderCartButton;