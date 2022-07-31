import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const Row = ({ title, baseurl, isLargeRow }) => {
  const imgPath = "https://image.tmdb.org/t/p/w500/";
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(baseurl);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [baseurl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const trailerBox = useRef(null);

  // useEffect(() => {
  //   //setting trailerurl and loading because on changing itemdetails trailerurl
  //   //does not change and show trailer of previously opened item .
  //   setTrailerUrl("");
  //   setLoading(false);
  // }, [itemDetails]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      async function fetchTrailer() {
        await axios
          .get(
            `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=2159aef64b3bbb9688819079faa78910&language=en-US`
          )
          .then((responseMovieTrailer) => {
            if (
              responseMovieTrailer.data?.results?.length === 0 ||
              !responseMovieTrailer.data?.results[0]?.key
            ) {
              throw new Error("Trailer not available!");
            } else {
              setTrailerUrl(responseMovieTrailer.data.results[0].key);
              trailerBox.current.focus();
            }
          })
          .catch(() => {
            axios
              .get(
                `https://api.themoviedb.org/3/tv/${movie.id}/videos?api_key=2159aef64b3bbb9688819079faa78910&language=en-US`
              )
              .then((responseTvTrailer) => {
                if (
                  responseTvTrailer.data?.results?.length === 0 ||
                  !responseTvTrailer.data?.results[0]?.key
                ) {
                  alert(
                    "Trailer not available.\nTry:\n1.Checking the connection.\n2.Playing different TV, Movie trailer."
                  );
                } else {
                  setTrailerUrl(responseTvTrailer.data.results[0].key);
                  trailerBox.current.focus();
                }
              });
            // .catch(() => {
            //   // No Trailer is available for item in TMDb
            //   alert(
            //     "Trailer not available.\nTry:\n1.Checking the connection.\n2.Playing different TV, Movie trailer."
            //   );
            // });
          });
      }
      fetchTrailer();
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${imgPath}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      {console.log(trailerUrl)}
    </div>
  );
};

export default Row;
