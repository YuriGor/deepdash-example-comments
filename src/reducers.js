import _ from "lodash";
import { FILTER_SET } from "./actions";

const initialState = {
  filter: {
    text: "",
    verified: undefined,
    rating: {}
  },
  data: []
};

function app(state = initialState, action) {
  switch (action.type) {
    case FILTER_SET:
      let filter = {};
      _.set(filter, action.path, action.value);
      return _.merge({}, state, {
        filter
      });
    default:
      return state;
  }
}

export default app;
