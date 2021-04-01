import React from "react";
import { render } from "react-dom";
import { Table } from "rsuite-table";

const styles = {
  padding: 20,
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Table>Hello World</Table>
  </div>
);

render(<App />, document.getElementById("root"));
export default App;