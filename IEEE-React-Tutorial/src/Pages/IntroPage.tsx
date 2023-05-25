import { Link } from "react-router-dom";

function IntroPage() {
  return (
    <>
      <h1>Frank's personal website</h1>
      <h2>Hello! Welcome to Frank's Home, please feel free to explore!</h2>

      <br />
      <Link to="/">Back</Link>
    </>
  );
}

export default IntroPage;
