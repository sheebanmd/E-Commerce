import React, { useContext } from "react";
import CartProvider from "../Components/Products/Store.js/CartProvider";
import classes from './MyCart.module.css';


const Mycart = () => {
  const a = useContext(CartProvider);
  const { products } = a;

  const myprods = products.filter((p) => {
    return a.prodID.includes(p.id);
  });

  const purchase= ()=>{
      alert("Thanks For Purchase")
  }

  return (
    <div className={classes.mycart}>
      {myprods.map((p) => {
        return (
          <div>
            <h4>{"Title : "+p.title } <br></br></h4>
            <h4>{"Rs : "+p.price}</h4>
            <button>Remove</button>      
          </div>
        );
      })}
      <div className={classes.mycartbutton}>
      <button>Close</button>
      <button onClick={purchase}>Purchase</button>  
      </div>
    </div>
  );
};

export default Mycart;
