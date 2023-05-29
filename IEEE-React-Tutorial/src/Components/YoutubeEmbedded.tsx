//import PropTypes from "prop-types";

interface Prop {
  videoTitle: string;
  embeddedID: string;
}

const YoutubeEmbedded = ({ embeddedID }: Prop) => (
  <div className="video-responsive" style={{ maxWidth: "720px" }}>
    <iframe
      width="720"
      height="480"
      src={`https://www.youtube.com/embed/${embeddedID}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      loading="eager"
      title="{Embedded Youtube Video}"
    />
  </div>
);

// Redundant if we have TypeScript
// YoutubeEmbed.propTypes = {
//   embedId: PropTypes.string.isRequired,
// };

export default YoutubeEmbedded;
