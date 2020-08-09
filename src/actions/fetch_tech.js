export function fetchTech() {
  return function (dispatch) {
    fetch(
      "https://newsapi.org/v1/articles?source=the-verge&sortBy=top&apiKey=cb830d7f37564afc9464bb901697e968"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.articles);
        dispatch({
          type: "FETCH_TECH",
          payload: data.articles,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
