import React from "react";
import FilterLink from "../containers/filterLink";
import { FILTER_KEYWORD, FILTER_VERIFIED, FILTER_STARS } from "../actions";

const FilterPanel = () => (
  <div id="filters">
    <FilterLink name="text" label="" title="enter keyword" cls="" type="text" />
    <FilterLink
      name="verified"
      label="Verified"
      title="Show verified users only"
      cls=""
      type="checkbox"
    />
    <FilterLink
      name="rating.none"
      label=""
      title="Exclude comments without rating"
      cls="no-star"
      type="checkbox"
    />
    <FilterLink
      name="rating.s1"
      label=""
      title="Exclude comments with rating 1"
      cls="star"
      type="checkbox"
    />
    <FilterLink
      name="rating.s2"
      label=""
      title="Exclude comments with rating 2"
      cls="star"
      type="checkbox"
    />
    <FilterLink
      name="rating.s3"
      label=""
      title="Exclude comments with rating 3"
      cls="star"
      type="checkbox"
    />
    <FilterLink
      name="rating.s4"
      label=""
      title="Exclude comments with rating 4"
      cls="star"
      type="checkbox"
    />
    <FilterLink
      name="rating.s5"
      label=""
      title="Exclude comments with rating 5"
      cls="star"
      type="checkbox"
    />
  </div>
);

export default FilterPanel;
