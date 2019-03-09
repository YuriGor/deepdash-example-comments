import React from "react";
import PropTypes from "prop-types";

const Filter = ({ type, name, label, cls, title, isActive, onChange }) => (
  <label title={title} className={cls}>
    <input
      type={type}
      defaultChecked={isActive}
      onChange={onChange}
      placeholder={title}
    />
    <i className="title fa">{label}</i>
  </label>
);

Filter.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cls: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired
};

export default Filter;
