import { React, useContext, useRef } from "react";
import Card from "../Components/UI/Card";
import AuthContext from "../store/auth-context";
import "./Login.modules.css";

const Login = () => {

  const emailInputRef = useRef("");
  const passwordInputRef = useRef("");

  
    // const [isLogin, setIsLogin] = useState(true);
      const authCtx = useContext(AuthContext)


  const userLoggedIn = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // if (isLogin) {
    //     setIsLogin(true);
        fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC5eoMr_cVVPsOn-np1OGHyiXDLtWqJX_0",{
            method : "POST",
            body : JSON.stringify({
              email : enteredEmail,
              password : enteredPassword,
              returnSecureToken : true
        }),
        headers:
        {
          "Content-Type": "application/json"
        },
        }).then(( response) =>{
          // setIsLoading(false)
            if (response.ok) {
              alert("Logged in")
                return response.json();
          }
            else{
              return response.json().then((data)=>{
              let errorMessage = "Authentication failed Try Again";
            //   if (data && data.error && data.error.message) {
            //     errorMessage = data.error.message
            //   }
              alert(errorMessage);
              // throw new Error(errorMessage)
              });
            }
        })
        .then((data)=>{
          // console.log(data);
          authCtx.login(data.idToken)
          // history.replace("/");
        })
        .catch((err)=>{
          alert(err.message);
        })
  
  
  };

  return (
    <Card>
      <form onSubmit={userLoggedIn}>
        <div className="mainLogin">
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
          <label>Password : </label>
          <br></br>
          <input
            type="password"
            id="password"
            minLength="6"
            required
            ref={passwordInputRef}
          ></input>
          <br></br>
          <button type="submit">Login</button>
        </div>
      </form>
    </Card>
  );
};

export default Login;

// import { useState, useRef, useContext } from 'react';
// // import { useHistory} from "react-router-dom";
// import classes from './Login.modules.css';
// import AuthContext from '../store/auth-context';

// const Login = () => {
// //   const history = useHistory();

//    const emailInputRef =  useRef();
//    const passwordInputRef =  useRef();

//    const authCtx = useContext(AuthContext)

//   const [isLogin, setIsLogin] = useState(true);
//  const [isLoading, setIsLoading] =  useState(false);

//   const switchAuthModeHandler = () => {
//     setIsLogin((prevState) => !prevState);
//   };

//   const submitHandler = (event)=>{
//     event.preventDefault();

//       const enteredEmail = emailInputRef.current.value;
//       const enteredPassword = passwordInputRef.current.value;

//       // Optional Add Validation
//       setIsLoading(true);
//       let url;
//       if (isLogin) {
//           url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC5eoMr_cVVPsOn-np1OGHyiXDLtWqJX_0";
//       }
//       else{
//         url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC5eoMr_cVVPsOn-np1OGHyiXDLtWqJX_0";
//       }
//       fetch(
//         url ,{
//           method : "POST",
//           body : JSON.stringify({
//             email : enteredEmail,
//             password : enteredPassword,
//             returnSecureToken : true
//       }),
//       headers:
//       {
//         "Content-Type": "application/json"
//       },
//       }).then(( response) =>{
//         setIsLoading(false)
//           if (response.ok) {
//             alert("Logged in")
//               return response.json();

//         }
//           else{
//             return response.json().then((data)=>{
//             let errorMessage = "Authentication failed";
//             if (data && data.error && data.error.message) {
//               errorMessage = data.error.message
//             }
//             alert(errorMessage);
//             // throw new Error(errorMessage)
//             });
//           }
//       })
//       .then((data)=>{
//         // console.log(data);
//         authCtx.login(data.idToken)
//         // history.replace("/");
//       })
//       .catch((err)=>{
//         alert(err.message);
//       })
//   };

//   return (
//     <section className={classes.auth}>
//       <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
//       <form onSubmit={submitHandler}>
//         <div className={classes.control}>
//           <label htmlFor='email'>Your Email</label>
//           <input type='email' id='email' required ref={emailInputRef} />
//         </div>
//         <div className={classes.control}>
//           <label htmlFor='password'>Your Password</label>
//           <input type='password' id='password' required ref={passwordInputRef} />
//         </div>
//         <div className={classes.actions}>
//           {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
//           {isLoading && <p>Sending Reqest...</p>}

//           <button
//             type='button'
//             className={classes.toggle}
//             onClick={switchAuthModeHandler}
//           >
//             {isLogin ? 'Create new account' : 'Login with existing account'}
//           </button>
//         </div>
//       </form>
//     </section>
//   );
// };

// export default Login;

// import {React, useRef, useState } from "react";
// import Card from "../Components/UI/Card";
// import "./Login.modules.css";

// const Login = () => {

//     const [isLogin, setIsLogin] = useState(true);

//     const emailInputRef = useRef("");
//     const passwordInputRef = useRef("");

//     const userLoggedIn = (event) =>{
//         event.preventDefault();

//                const enteredEmail =  emailInputRef.current.value;
//                const enteredPassword = passwordInputRef.current.value;

//         console.log("user Logged In");
//         console.log(enteredEmail +" and "+ enteredPassword);
//         // setIsLogin(true)
//         if (isLogin) {
//             setIsLogin(true)
//             // fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDHTftMhM4ur0pav5IZ4Kh-lC6sTFvuSLk",{
//              fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC5eoMr_cVVPsOn-np1OGHyiXDLtWqJX_0",{

//             })

// }
// }

//   return (
//     <Card>
//       <form onSubmit={userLoggedIn}>
//         <div className="mainLogin">
//              <label htmlFor='email'>Your Email</label>
//           <input type='email' id='email' required ref={emailInputRef} />
//           <label>Password : </label>
//           <br></br>
//           <input type="password" id="password" minLength="6" required ref={passwordInputRef}></input>
//           <br></br>
//           <button type="submit">Login</button>
//         </div>
//       </form>
//     </Card>
//   );
// };

// export default Login;

// // method : "POST",
// // body : JSON.stringify({
// //     email : "enteredEmail",
// //     password : "enteredPassword",
// //     returnSecureToken : true
// // }),
// // headers : {
// //    "Content-Type" : "application/json",
// // },
// // }).then(( response) =>{
// //  if (response.ok) {
// //      return response.json();
// //  }
// //  else{
// //    return response.json().then((data)=>{
// //    // let errorMessage = "Authentication failed";
// //    let errorMessage =  data.errorMessage
// //    if (data && data.error && data.error.message) {
// //      errorMessage = data.error.message
// //    }
// //    alert(errorMessage);
// //    throw new Error(errorMessage)
// //    });
// //  }
// // })
// // .then((data)=>{
// // console.log(data);
// // })
// // //   .catch((err)=>{
// // //     alert(err.message);
// // //   })
// // }
