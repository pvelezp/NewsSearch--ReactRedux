export function fetchCustomNews(source, relevance) {
  return function (dispatch) {
    fetch(
      "https://newsapi.org/v1/articles?source=" +
        source +
        "&sortBy=" +
        relevance +
        "&apiKey=cb830d7f37564afc9464bb901697e968"
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "FETCH_CUSTOM_NEWS",
          payload: data.articles,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
