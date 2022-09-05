import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartProvider from "../Components/Products/Store.js/CartProvider";
import classes from './MyCart.module.css';

const Mycart = () => {

  const navigate = useNavigate()

  const a = useContext(CartProvider);
  const { products } = a;

  const myprods = products.filter((p) => {
    return a.prodID.includes(p.id);
  });

  const purchase= ()=>{
      alert("Thanks For Purchase")
  }

  return (
    <>
    <div className={classes.mycart}>
      {myprods.map((p) => {
        return (
          <div key={Math.random()}>
          <div>
            <h4>{"Title : "+p.title } <br></br></h4>
            <h4>{"Rs : "+p.price}</h4>
            <button>Remove</button>      
          </div>
          </div>
        );
      })}
    </div>
    <div className={classes.myclosebutton}>
    <button onClick={ ()=>navigate(-1)}>Close</button>
    </div>
    <div className={classes.mypurchasebutton}>
    <button onClick={purchase}>Purchase</button>  
    </div>
    </>
  );
};

export default Mycart;
