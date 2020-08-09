import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchTech } from "./actions/fetch_tech";
import TechNew from "./TechNew";

const Tech = () => {
  const techSelector = useSelector((state) => state.FetchTech);
  const dispatch = useDispatch();

  const getTech = () => dispatch(fetchTech());

  useEffect(() => {
    getTech();
  }, []);
  return (
    <div>
      <h1>Tech News</h1>
      <div className="post">
        {techSelector.techNew.map((x) => (
          <TechNew key={x.id} x={x} />
        ))}
      </div>
    </div>
  );
};

export default Tech;
