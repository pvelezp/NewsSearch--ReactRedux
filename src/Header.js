import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            {" "}
            <Link to="/">ReactReduxHooks</Link>
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            <Link to="/">Search</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/tech">Tech</Link>{" "}
          </li>
        </ul>
      </nav>
      <h1>React redux Hooks</h1>
      <img src="" alt="yeah" />
    </header>
  );
};

export default Header;
