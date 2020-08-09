import React from "react";

const Article = ({ x }) => {
  return (
    <a href={`${x.url}`}>
      <div>
        <img src={x.urlToImage} alt={x.title} />
        <h2>{x.title}</h2>
        <p>{x.description}</p>
      </div>
    </a>
  );
};

export default Article;
