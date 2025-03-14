import React from "react";
import "./home.css";
import Navbar from "../../ components/navbar/navbar";
import herobanner from "../../assets/hero_banner.jpg";
import herotitle from "../../assets/hero_title.png";
import playicon from "../../assets/play_icon.png";
import infoicon from "../../assets/info_icon.png";
import Titlecard from "../../ components/titlecard/titlecard";
import Footer from "../../ components/footer/footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={herobanner} alt="banner" className="banner-img" />
        <div className="hero-caption">
          <img src={herotitle} alt="" srcset="" className="caption-img" />
          <p>
            Discovering his ties to a secrtet ancient order, young man livinhg
            in modern Istanbul embark on a quest to save the city from an
            immortal enemy
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={playicon} alt="playicon" />
              Play
            </button>
            <button className="dark-btn">
              <img src={infoicon} alt="more info" />
              more info
            </button>
          </div>
          <Titlecard />
        </div>
      </div>
      <div className="more-cards">
        <Titlecard title={"Blockbuster Movies"} category={"now_playing"} />
        <Titlecard title={"Only on Netflix"} category={"popular"} />
        <Titlecard title={"Upcoming Movies"} category={"top_rated"} />
        <Titlecard title={"Top Picks For You"} category={"upcoming"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
