import _ from "lodash-es";
import React from "react";
import PropTypes from "prop-types";
const highlightFilterText = (text, filterText) => {
  text = _.escape(text);
  if (filterText) {
    text = _.replace(
      text,
      new RegExp(_.escapeRegExp(filterText), "gi"),
      "<b>$&</b>"
    );
  }
  return { __html: text };
};
const Comments = ({ data, filterText }) => (
  <div className="comments">
    {data.map(d => (
      <div key={d.key} className="comment">
        <div className={"fa author" + (d.verified ? " verified" : "")}>
          {d.name}
        </div>
        <div
          className={
            "fa rating" +
            (d.rating !== undefined ? " stars-" + d.rating : " none")
          }
        />
        <div className="clear" />
        <div
          className="text"
          dangerouslySetInnerHTML={highlightFilterText(d.text, filterText)}
        />
        <div className="replies">
          <Comments data={d.replies || []} filterText={filterText} />
        </div>
      </div>
    ))}
  </div>
);

Comments.propTypes = {
  data: PropTypes.array.isRequired,
  filterText: PropTypes.string.isRequired
};

export default Comments;
