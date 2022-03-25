import { Container } from "@material-ui/core";
import React from "react";
import "./NavContents.css";
import NewsCard from "../Components/NewsCard";

function NavContents({ newsArray, newsResults }) {
  return (
    <Container maxWidth="md">
      <div className="contents">
        {newsArray.map((newsItem) => (
          <NewsCard newsItem={newsItem} key={newsItem.name} />
        ))}
      </div>
    </Container>
  );
}

export default NavContents;
