import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movieData, setMovieData] = useState({});

  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovieData(json.data.movie);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div style={{ display: "flex", marginTop: "50px" }}>
          <Link to="/">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "25px",
                width: "40px",
                height: "40px",
                border: "2px solid black",
                borderRadius: "50%",
                backgroundColor: "skyblue",
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translateX(-84%) translateY(30%)",
              }}
            >
              <span style={{ transform: "translateY(-18%)" }}>👈</span>
            </div>
          </Link>
          <div
            style={{
              display: "flex",
              width: "270px",
              flexDirection: "column",
              marginRight: "10px",
            }}
          >
            <img
              style={{
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
              }}
              src={movieData.medium_cover_image}
              alt=""
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                padding: "0 10px",
                border: "1.5px solid grey",
                height: "45px",
                borderTop: 0,
                borderBottomLeftRadius: "20px",
                borderBottomRightRadius: "20px",
              }}
            >
              <span style={{ fontSize: "14px" }}>⭐{movieData.rating}</span>
              <span style={{ fontSize: "14px" }}>
                🎦{movieData.download_count}
              </span>
              <span style={{ fontSize: "14px" }}>👍{movieData.like_count}</span>
              <span style={{ fontSize: "14px" }}>
                🕒{Math.floor(movieData.runtime / 60)}H{" "}
                {movieData.runtime - Math.floor(movieData.runtime / 60) * 60}Min
              </span>
            </div>
          </div>
          <div
            style={{
              width: "300px",
              border: "1.5px solid grey",
              borderRadius: "20px",
              padding: "0 10px",
              boxSizing: "border-box",
            }}
          >
            <div>
              <h1>{movieData.title}</h1>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                {movieData.genres.map((genre) => (
                  <div
                    style={{
                      backgroundColor: "grey",
                      color: "white",
                      padding: "2px 7px",
                      borderRadius: "5px",
                      marginRight: "5px",
                      marginBottom: "5px",
                    }}
                    key={genre}
                  >
                    {genre}
                  </div>
                ))}
              </div>
              <div>
                <p>{movieData.description_full}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
