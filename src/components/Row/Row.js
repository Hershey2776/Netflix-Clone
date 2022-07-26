import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Row.css";

const Row = ({ title, baseurl, isLargeRow }) => {
  const imgPath = "https://image.tmdb.org/t/p/w500/";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(baseurl);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [baseurl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${imgPath}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
