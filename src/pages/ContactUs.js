import React, { useRef } from "react";
import Card from "../Components/UI/Card";
import classes from "./Contact.module.css";

const ContactUs = () => {

  const Name = useRef("");
  const Email = useRef("");
  const Phone = useRef("");

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    const ComplaintBox = {
              Name: Name.current.value,
              Email: Email.current.value,
              Phone: Phone.current.value,
            };

    const response = await fetch('https://react-http-1fcec-default-rtdb.firebaseio.com/userDetails.json', {
      method: 'POST',
    //   body: JSON.stringify(userDetails),
      body: JSON.stringify(ComplaintBox),
    //   headers: {                           // Header Is Optional
    //     'Content-type': 'application/json'
    //   }
    })
    const data = await response.json();
    console.log(data)
    alert('Thank you for contacting us..')
    
  }

  return (
    <Card>
      <div className={classes.header1}>
        <h1>Contact Page</h1>
      </div>
      <div className={classes.header2}>
        <h2>For Bookings Enter Your Details</h2>
      </div>
      <div className={classes.ContactPage}>
        <form onSubmit={formSubmitHandler}>
          <label>Name : </label>
          <br></br>
          <input type="text" id="Name" required ref={Name}></input>
          <br></br>
          <label>Email : </label>
          <br></br>
          <input type="email" id="Email" required ref={Email}></input>
          <br></br>
          <label>Phone Number : </label>
          <br></br>
          <input type="number" id="Phone" required ref={Phone}></input>
          <br></br>
          <button type="submit">Add Complaint</button>
        </form>
      </div>
    </Card>
  );
};

export default ContactUs;


//   const formSubmitHandler = (event) => {
//     event.preventDefault();

//     const ComplaintBox = {
//       Name: Name.current.value,
//       Email: Email.current.value,
//       Phone: Phone.current.value,
//       Complaint: Complaint.current.value,
//     };
//     //    console.log(ComplaintBox);
//     props.onAdd(ComplaintBox);
//   };

    // const Name = document.getElementById('Name').value;
    // const Email = document.getElementById('Email').value;
    // const Phone = document.getElementById('Phone').value;
    // const Complaint = document.getElementById('Complaint').value;

    // const userDetails = {
    //     Name : Name,
    //     Email : Email,
    //     Phone : Phone,
    //     Complaint : Complaint
    // }