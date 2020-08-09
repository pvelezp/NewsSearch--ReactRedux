import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCustomNews } from "./actions/fetch_custom_news";
import Article from "./Article";

const Main = () => {
  //news sources
  const [sources, setSources] = useState([]);
  //select source
  const [source, setSource] = useState("");
  //select relevance
  const [relevance, setRelevance] = useState("");
  //to dispatch
  const dispatch = useDispatch();
  // to use the state of the reducer
  const customNewsSelector = useSelector((state) => state.CustomSearch);

  const getCustomNews = (source, relevance) =>
    dispatch(fetchCustomNews(source, relevance));

  //getting the sources
  useEffect(() => {
    fetch("https://newsapi.org/v1/sources?")
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setSources(response.sources);
      });
  }, []);

  const getNews = (e) => {
    e.preventDefault();
    if (source === "" || source === "nothing") {
      return;
    } else {
      getCustomNews(source, relevance);
      console.log(customNewsSelector.customNews);
    }

    // to print the data we have searched
  };

  return (
    <section>
      <h2>Custom Search</h2>

      <form onSubmit={getNews}>
        <div className="form-control">
          <label>Source</label>
          <select onChange={(e) => setSource(e.target.value)}>
            <option value="nothing">--Selecciona</option>
            {sources.map((source) => (
              <option key={source.id} value={source.name}>
                {source.name}
              </option>
            ))}
          </select>
          <label>Relevance</label>
          <select onChange={(e) => setRelevance(e.target.value)}>
            <option value="latest">Latest</option>

            <option value="top">Top</option>
          </select>
          <input type="submit" value="Search" />
        </div>
      </form>
      {customNewsSelector.customNews.map((x) => (
        <Article key={x.id} x={x} />
      ))}
    </section>
  );
};

export default Main;
