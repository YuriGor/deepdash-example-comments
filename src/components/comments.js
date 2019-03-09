import React from "react";

function Comments(props) {
  let { data } = props;

  return (
    <div id="comments">
      {data.map(d => (
        <div key={d.key} className="comment">
          <div className={"fa author" + (d.verified ? " verified" : "")}>
            {d.name}
          </div>
          <div
            className={"fa rating" + (d.rating ? " stars-" + d.rating : "")}
          />
          <div className="clear" />
          <div className="text">{d.text}</div>
          <div className="replies">
            <Comments data={d.replies || []} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Comments;
