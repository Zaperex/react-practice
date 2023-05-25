import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <h1>Frank's personal website</h1>
      <h2>Hello! Welcome to Frank's Home, please feel free to explore!</h2>
      <br />
      <ul>
        <li>
          <Link to="/about-me">About Me</Link>
        </li>
        <li>
          <Link to="/contact-me">Contact Me</Link>
        </li>
        <li>
          <Link to="/message-me">Message Me</Link>
        </li>
      </ul>
    </>
  );
}

export default HomePage;
