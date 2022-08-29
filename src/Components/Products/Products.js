import React, { useContext } from "react";
import Card from "../UI/Card";
// import {Link } from "react-router-dom";
import classes from './Products.module.css';
import CartProvider from './Store.js/CartProvider'

const Products = () => {
  const a=useContext(CartProvider)

  const productsArr = [
    {
      id: 1,
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      id: 2,
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      id: 3,
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      id: 4,
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];


const handleAdd = (product) => {
  a.prodID.push(product.id);
  console.log(a);
}


  return <div>

            {productsArr.map( product => (
                      <div key={product.id} className='card'>
                      <Card>
                      <div >
                          <img className={classes['product-img']} src={product.imageUrl} alt='img' />
                          <h2>{product.title}</h2> 
                          <h5>{`$${product.price}`}</h5>
                          <button classes={classes['add-btn']} onClick={()=> handleAdd(product)}>Add to cart</button>

                      </div>
                      </Card>
                  </div>
              ))
            }
    </div>;
};

export default Products;
