import React from "react";
import FilterPanel from "./filterPanel";
import FilteredComments from "../containers/filteredComments";

class App extends React.Component {
  render() {
    return (
      <>
        <FilterPanel />
        <FilteredComments />
      </>
    );
  }
}

export default App;
