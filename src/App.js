import React from "react";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";
import Header from "./Header";
import { Switch, Route } from "react-router-dom";
import Main from "./Main";
import Tech from "./Tech";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route exact path="/tech">
              <Tech />
            </Route>
          </Switch>
        </main>
      </div>
    </Provider>
  );
}

export default App;
