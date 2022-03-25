import React from "react";
import "./NewsCard.css";

function NewsCard({ newsItem }) {
  const fullDate = new Date(newsItem.publishedAt);
  var date = fullDate.toString().split(" ");
  const Hour = parseInt(date[4].substring(0, 2));
  const time = Hour > 12 ? true : false;
  console.log(newsItem);

  return (
    <div>
      <div className="newsCard">
        <img className="newsImage" src={newsItem.urlToImage} alt="" />
        <div className="newsText">
          <div>
            <span className="title">
              <h3>{newsItem.title}</h3>{" "}
            </span>
            <br />
            <span className="Author">
              <a href={newsItem.url} target="_blank">
                <b>Short </b>
              </a>
              {""}
              <span className="muted">
                {""}
                By {newsItem.author ? newsItem.author : "unknown"} / {""}
                {time
                  ? `${Hour - 12}:${date[4].substring(3, 5)}PM`
                  : `${Hour}:${date[4].substring(3, 5)}AM`}{" "}
                on {date[2]} {date[1]}, {date[0]}
              </span>
            </span>
          </div>
          <div className="lowerNewsText">
            <div className="descriotion">{newsItem.description}</div>
            <span className="readmore">
              readmoreAt{" "}
              <a className="source" href={newsItem.url} target="_blank">
                <b>{newsItem.source.name}</b>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
