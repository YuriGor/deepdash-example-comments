import React from "react";
import FilterPanel from "./filterPanel";
import Comments from "./comments";

class App extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <>
        <FilterPanel />
        <Comments data={data} />
      </>
    );
  }
}

export default App;
