import React from "react";

const TechNew = ({ x }) => {
  return (
    <div className="post" key={x.title}>
      <img src={x.urlToImage} />
      <h2>{x.title}</h2>
      <p>{x.description}</p>
    </div>
  );
};

export default TechNew;
