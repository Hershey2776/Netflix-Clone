import React from "react";
import requests from "../components/Requests/request";
import Row from "../components/Row/Row";
import Banner from "../components/Banner.js/Banner";
import Nav from "../components/Nav/Nav";

function HomePage() {
  return (
    <div className="app">
      <Nav />
      <Banner baseurl={requests.fetchTrending} />
      <Row
        title="Netflix Originals"
        baseurl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" baseurl={requests.fetchTrending} />
      <Row title="Comedies" baseurl={requests.fetchComedyMovies} />
      <Row title="Action Thrillers" baseurl={requests.fetchActionMovies} />
      <Row title="Horror" baseurl={requests.fetchHorrorMovies} />
      <Row title="Romance" baseurl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" baseurl={requests.fetchDocumentaries} />
    </div>
  );
}

export default HomePage;
