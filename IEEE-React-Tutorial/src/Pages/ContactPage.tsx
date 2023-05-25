import { Link } from "react-router-dom";

function ContactPage() {
  return (
    <>
      <h1>Frank's personal website</h1>
      <br />
      <h1>Contact Me</h1>
      <p>Phone number: 416-xxx-xxxx</p>
      <p>My Instagram QR code: &lt;Please insert an image here&gt; </p>
      <p>
        Linkedin icon, and after clicking on it, your linkedin page will be
        opened
      </p>
      <p>
        Github icon, and after clicking on it, your github page will be opened
      </p>
      <br />
      <Link to="/">Back</Link>
    </>
  );
}

export default ContactPage;
