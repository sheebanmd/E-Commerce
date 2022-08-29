import UserCart from "./CartProvider";

import React from 'react'


const UserCartInfo = (props)=>{

    const state={
        prodID:[],
      products:  [
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
          ]
    }
    return(
        <UserCart.Provider value={state}>
            {props.children}
        </UserCart.Provider>
    )
}

export default UserCartInfo;