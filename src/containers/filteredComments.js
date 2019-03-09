import lodash from "lodash";
import deepdash from "deepdash";
import { connect } from "react-redux";
import Comments from "../components/comments";
const _ = deepdash(lodash);

const getFilteredData = (data, filter) => {
  let ratingChanged = _.some(filter.rating);
  if (!filter.verified && !filter.text && !ratingChanged) {
    // console.log("empty filter");
    return data;
  }
  // console.log(filter);

  return _.filterDeep(
    data,
    c => {
      return (
        (!filter.verified || c.verified) &&
        (!ratingChanged ||
          !filter.rating[c.rating ? "s" + c.rating : "none"]) &&
        (!filter.text || _.includes(c.text.toLowerCase(), filter.text))
      );
    },
    { tree: { children: "replies" } }
  );
};

const mapStateToProps = state => {
  return {
    data: getFilteredData(state.data, state.filter),
    filterText: state.filter.text
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const FilteredComments = connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);

export default FilteredComments;
