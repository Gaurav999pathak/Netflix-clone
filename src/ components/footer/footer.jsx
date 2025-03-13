import React from "react";
import "./footer.css";
import youtube_icon from "../../assets/youtube_icon.png";
import instagram_icon from "../../assets/instagram_icon.png";
import twitter_icon from "../../assets/twitter_icon.png";
import facebook_icon from "../../assets/facebook_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={youtube_icon} alt="" srcset="" />
        <img src={instagram_icon} alt="" srcset="" />
        <img src={twitter_icon} alt="" srcset="" />
        <img src={facebook_icon} alt="" srcset="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Card</li>
        <li>Media Center</li>
        <li>Investors Relation</li>
        <li>Jobs</li>
        <li>Terms Of Usage</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Prefrences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className="copyright-text"> © 1997 -2025 Netflix, Inc.</p>
    </div>
  );
};
export default Footer;
