import Bandpro from "../assets/BandMembers.png";
import classes from "./About.module.css";

const About = () => {
  return (
    <>
      <section className={classes.about}>
        <h2>About</h2>
        <div>
          <img src={Bandpro} alt="profile" />
          <p>
            The fast and dramatic changes in information technology specially in
            last one decade has given new concept of marketing in which buyer
            and seller do not see each other face to face nor see the goods
            physically; the whole transaction is carried out with the help of
            ‘on line’ communication. The entire deal is carried out with the
            help of computer – telecommunication and net working with associated
            hardware. In the e – commerce internet provides information about
            goods and services “It is” a way of conducting imaging and executing
            business transactions and services through elec­tronic media and net
            working in computers and communication net work, websites, e-mail
            are resorted.
            <br />
            <br></br>
            The fast and dramatic changes in information technology specially in
            last one decade has given new concept of marketing in which buyer
            and seller do not see each other face to face nor see the goods
            physically; the whole transaction is carried out with the help of
            ‘on line’ communication. The entire deal is carried out with the
            help of computer – telecommunication and net working with associated
            hardware. In the e – commerce internet provides information about
            goods and services “It is” a way of conducting imaging and executing
            business transactions and services through elec­tronic media and net
            working in computers and communication net work, websites, e-mail
            are resorted.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
