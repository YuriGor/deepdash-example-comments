import React from "react";
import Filter from "./filter";

function FilterPanel(props) {
  return (
    <div id="filters">
      <input type="text" placeholder="enter keyword" />
      <Filter
        id="verified"
        label="Verified"
        title="Show verified users only"
        cls=""
      />
      <Filter
        id="s1"
        label=""
        title="Exclude comments with rating 1"
        cls="star"
      />
      <Filter
        id="s2"
        label=""
        title="Exclude comments with rating 2"
        cls="star"
      />
      <Filter
        id="s3"
        label=""
        title="Exclude comments with rating 3"
        cls="star"
      />
      <Filter
        id="s4"
        label=""
        title="Exclude comments with rating 4"
        cls="star"
      />
      <Filter
        id="s5"
        label=""
        title="Exclude comments with rating 5"
        cls="star"
      />
    </div>
  );
}

export default FilterPanel;
