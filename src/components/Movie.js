import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, title, coverImg, summary, genres }) {
  return (
    <div
      style={{
        display: "flex",
        boxShadow: "2px 2px 5px grey",
        justifyContent: "space-around",
        alignItems: "center",
        position: "relative",
      }}
    >
      <img
        src={coverImg}
        alt=""
        style={{
          width: "230px",
          height: "350px",
          boxShadow: "0px 0px 10px grey",
        }}
      />
      <div
        style={{
          width: "270px",
          alignSelf: "flex-start",
        }}
      >
        <h2>{title}</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {genres.map((g) => (
            <div
              style={{
                backgroundColor: "grey",
                color: "white",
                fontSize: "12px",
                padding: "2px 7px",
                borderRadius: "5px",
                marginRight: "5px",
                marginBottom: "5px",
              }}
              key={g}
            >
              {g}
            </div>
          ))}
        </div>
        <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
        <div
          style={{
            backgroundColor: "black",
            color: "white",
            position: "absolute",
            bottom: "5%",
            right: "5%",
            padding: "5px 10px",
          }}
        >
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to={`/movie/${id}`}
          >
            <span>More Details?</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
