import React, { useEffect, useRef, useState } from "react";
import "./titlecard.css";
import card_data from "../../assets/cards/Cards_data";
import { Link } from "react-router-dom";
const Titlecard = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef(null);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZDRiNDM4NWE5MDBjYTBhOTY1ZDI4NTY0NzYzYTc1OSIsIm5iZiI6MTc0MTkzMjgwMS40MjMsInN1YiI6IjY3ZDNjOTAxYmY0ODE4ODU0YzY0ZjFkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xieA7zbkfQBBsRS9N0BagQcFLZABHOwCn3agHtK7jdA",
    },
  };

  const handlewheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));
    cardsRef.current.addEventListener("wheel", handlewheel);
  }, []);
  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
                alt=""
                srcset=""
              />
              <p className="title">{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Titlecard;
