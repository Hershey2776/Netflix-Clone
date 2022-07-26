import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Banner.css";

const Banner = ({ baseurl }) => {
  const imgPath = "https://image.tmdb.org/t/p/w500";

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const request = await axios.get(baseurl);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    };
    getData();
  }, [baseurl]);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "…" : str;
  }
  return (
    <>
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${imgPath}${movie.backdrop_path})`,
          backgroundPosition: "center center",
        }}
      >
        <div className="banner_contents">
          <h1 className="banner_title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className="">
            <button className="banner_button">Play</button>
            <button className="banner_button">My List</button>
          </div>
          <h1 className="banner_description">
            {truncate(movie?.overview, 150)}
          </h1>
        </div>
        <div className="banner_fade"></div>
      </header>
    </>
  );
};

export default Banner;
