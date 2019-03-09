import React from "react";

function Filter(props) {
  const { id, label, cls, title } = props;
  return (
    <label title={title} className={cls}>
      <input type="checkbox" />
      <i className="title fa">{label}</i>
    </label>
  );
}

export default Filter;
