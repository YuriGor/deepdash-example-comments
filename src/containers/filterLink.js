import _ from "lodash-es";
import { connect } from "react-redux";
import { setFilter } from "../actions";
import Filter from "../components/filter";

const mapStateToProps = (state, ownProps) => {
  //console.log(state.filter, ownProps.name, _.get(state.filter, ownProps.name));
  return {
    isActive: _.get(state.filter, ownProps.name) ? true : false
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: e => {
      // console.log();
      dispatch(
        setFilter(
          ownProps.name,
          e.target.type === "text" ? e.target.value : e.target.checked
        )
      );
    }
  };
};

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);

export default FilterLink;
