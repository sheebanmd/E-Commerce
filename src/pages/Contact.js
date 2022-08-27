import Card from "../Components/UI/Card";
import classes from "./Contact.module.css";

const Contact = () => {

  const SubmitHandler = (event) =>{
      event.preventDefault();
      alert("Details Submited")
  }

  return (
    <Card className={classes.card}>
      <h1>Contact us</h1>
      <h3>for bookings enter your details</h3>
      <section className={classes.form}>
        <form onSubmit={SubmitHandler}>
          <div className={classes.control}>
            <label htmlFor="title">Name</label>
            <input type="text" id="name" />
          </div>
          <div className={classes.control}>
            <label htmlFor="opening-text">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="date">Mobile</label>
            <input type="number" id="mobile" />
          </div>
          <div className={classes.control}>
            <button>Book a call</button>
          </div>
        </form>
      </section>
    </Card>
  );
};

export default Contact;
