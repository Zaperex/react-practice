import { Link } from "react-router-dom";

function ContactPage() {
  return (
    <>
      <h1>Frank's personal website</h1>
      <br />
      <h1>Contact Me</h1>
      <p>Phone number: 416-xxx-xxxx</p>
      <Link to="https://www.linkedin.com/in/franktt-kong/" target="_blank">
        <img src="../assets/linkedin_logo.png" alt="Linkedin Logo"></img>
      </Link>
      <Link to="https://github.com/Zaperex" target="_blank">
        <img src="../assets/github.png" alt="Github Logo"></img>
      </Link>
      <br />
      <Link to="/">Back</Link>
    </>
  );
}

export default ContactPage;
