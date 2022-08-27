import React from "react";
import Card from "../UI/Card";
import {Link } from "react-router-dom";
// import classes from "./Products.modules.css"
import classes from './Products.module.css';

const Products = () => {
  const productsArr = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];


  const handleAdd = (product) => {
        console.log(product +"is Added to Cart");
}

  return <div>
            
            {productsArr.map( product => (
                      <div key={product.id} className='card'>
                      <Card>
                      <div >
                          <img className={classes['product-img']} src={product.imageUrl} alt='img' />
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                               et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                               aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur 
                              sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                          </p>
                          <Link to={`/product-detail/${product.title}`}><h4>{product.title}</h4></Link> 
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
