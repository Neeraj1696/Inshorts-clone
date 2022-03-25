import React from "react";
import "./NewsCard.css";

function NewsCard({ newsItem }) {
  return (
    <>
      <div className="newsCard">
        <img src={newsItem.urlToImage} alt={newsItem.title} />
      </div>

      <div className="newsText">
        <div>
          <span className="title">{newsItem.title} </span>
          <br />
          <span className="Author">
            <a href={newsItem.url} target="_blank">
              <b>Short </b>
            </a>
            {""}
            <span className="muted">
              {""}
              By {newsItem.author ? newsItem.author : "unknown"} / {""}
            </span>
          </span>
        </div>
      </div>
    </>
  );
}

export default NewsCard;
