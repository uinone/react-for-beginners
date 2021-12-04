import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";

function Detail() {
  const { id } = useParams();
  const [movieData, setMovieData] = useState({});

  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovieData(json.data.movie);
  }, [id]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return <h1>Detail</h1>;
}

export default Detail;
