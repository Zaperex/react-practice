import { Link } from "react-router-dom";
import YoutubeEmbedded from "../Components/YoutubeEmbedded";

function IntroPage() {
  return (
    <>
      <h1>Frank's personal website</h1>
      <h2>Hello! Welcome to Frank's Home, please feel free to explore!</h2>

      <br />
      <h1>Introductions</h1>
      <p className="text-slate-500 font-medium">
        Hello my name is Frank, and I am a 3rd year student at University of
        Toronto. I like listening to music, playing on the piano, and reading.
      </p>
      <div className="container mx-auto px-6">
        <YoutubeEmbedded videoTitle="Ghibli Concert" embeddedID="hTMoSaDdlLs" />
        <p className="text-2xl italic font-medium bg-green-400">
          Enjoy some Ghibli music!
        </p>
        <br />
      </div>
      <Link to="/">
        <button>Back</button>
      </Link>
    </>
  );
}

export default IntroPage;
